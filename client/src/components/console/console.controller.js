export default {
  name: 'console',
  props: {
    value: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      $header: null,
      moveObj: {
        startMoving: false,
        pageX: 0,
        pageY: 0,
        top: 0,
        left: 0
      }
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.$header = $(this.$el.querySelector('.dojo-console-header'));
      this.initHeaderEvents();
    });
  },
  watch: {
    ['value.shown'](newVal, oldVal) {
      if (newVal) {
        this.restore();
      } else {
        this.minisize();
      }
    },
    ['value.logList']() {
      if (this.value.shown) {
        this.$nextTick(() => {
          let body = this.$el.querySelector('.dojo-console-body');
          body.scrollTop = body.scrollHeight;
        });
      } else {
        this.value.unreadCount += 1;
        this.$emit('input', this.value);
      }
    }
  },
  methods: {
    initHeaderEvents() {
      let self = this;
      this.$header.on('mousedown', function (e) {
        let offset = self.$header.offset();
        Object.assign(self.moveObj, {
          startMoving: true,
          pageX: e.pageX,
          pageY: e.pageY,
          top: offset.top,
          left: offset.left
        });
      });
      let $doc = $(document);
      $doc.on('mousemove', _.throttle(function (e) {
        if (e.which !== 1 || !self.moveObj.startMoving) return;
        let moveX = e.pageX - self.moveObj.pageX;
        let moveY = e.pageY - self.moveObj.pageY;
        let top = Math.max(Math.min(window.innerHeight - 400, self.moveObj.top + moveY), 50);
        let left = Math.max(Math.min(window.innerWidth - 600, self.moveObj.left + moveX), 0);
        self.$header.parent().css({
          top: `${top}px`,
          left: `${left}px`
        })
      }, 10));
      $doc.on('mouseup', function () {
        self.moveObj.startMoving = false;
      });
    },
    minisize() {
      $(this.$el).addClass('minisize');
      this.value.shown = false;
      this.$emit('input', this.value);
    },
    restore() {
      $(this.$el).removeClass('minisize');
      this.value.unreadCount = 0;
      this.$emit('input', this.value);
    },
    clear() {
      console.log('clear');
      this.value.logList = [];
    }
  }
};