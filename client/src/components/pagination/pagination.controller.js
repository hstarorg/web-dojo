export default {
  props: {
    value: {
      type: Number,
      default: 1
    },
    totalCount: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 20
    },
    firstText: {
      type: String,
      default: 'First'
    },
    prevText: {
      type: String,
      default: 'Prev'
    },
    nextText: {
      type: String,
      default: 'Next'
    },
    lastText: {
      type: String,
      default: 'Last'
    },
    showPrevNext: {
      type: Boolean,
      default: true
    },
    showFirstLast: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pages: [1]
    };
  },
  created() {
    this.calcPages();
  },
  watch: {
    totalCount() {
      this.calcPages();
    }
  },
  methods: {
    calcPages() {
      let pageCount = Math.floor((this.totalCount - 1) / this.pageSize) + 1;
      pageCount = Math.max(pageCount, 1);
      this.pages = [];
      for (let i = 1; i <= pageCount; i++) {
        this.pages.push(i);
      }
    },
    goPage(p) {
      if (p < 1 || p > this.pages.length) {
        return;
      }
      this.$emit('input', p);
    }
  }
};
