class UserAuth {
  constructor() {
    this.users = JSON.parse(localStorage.getItem('truyan_users')) || [];
    this.currentUser = null;
  }

  register(email, tier) {
    const user = {
      id: Date.now(),
      email,
      tier,
      joinDate: new Date(),
      minedTotal: 0,
      balance: 0
    };
    this.users.push(user);
    this.save();
    return user;
  }

  upgradeTier(userId, newTier) {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      user.tier = newTier;
      this.save();
    }
  }

  save() {
    localStorage.setItem('truyan_users', JSON.stringify(this.users));
  }
}
