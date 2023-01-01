const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

// -------------------- Add THIS to arguments ------------------------------
function myClickHandler(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}
