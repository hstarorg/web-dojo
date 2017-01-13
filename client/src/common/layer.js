export const layer = {
  msg(message) {
    return window.layer.msg(message, {
      offset: 20,
      shift: 3,
      icon: 1,
      time: 1500
    });
  },

  error(message) {
    return window.layer.msg(message, {
      offset: 20,
      shift: 3,
      icon: 2,
      time: 1500
    });
  },

  close(index) {
    window.layer.close(index);
  },

  closeAll() {
    window.layer.closeAll();
  }
};
