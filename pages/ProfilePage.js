
class ProfilePage {
  constructor(page) {
    this.page = page;

    this.profileLink = page.getByRole("link", {
      name: "My Profile"
    });

    this.profileHeading = page.getByRole("heading", {
      name: "My Student Profile"
    });

    this.universityInput = page.getByLabel("University");
  }

  async open() {
    await this.profileLink.first().click();
  }

  async verifyProfilePage() {
    await this.profileHeading.waitFor({
      state: "visible"
    });

    await this.universityInput.waitFor({
      state: "visible"
    });
  }
}

export default ProfilePage;
