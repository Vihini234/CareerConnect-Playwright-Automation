
class SavedJobsPage {
  constructor(page) {
    this.page = page;

    this.savedJobsLink = page.getByRole("link", {
      name: "Saved Jobs"
    });

    this.savedJobsHeading = page.getByRole("heading", {
      name: "Saved opportunities"
    });
  }

  async open() {
    await this.savedJobsLink.click();
  }

  async verifySavedJobsPage() {
    await this.savedJobsHeading.waitFor({
      state: "visible"
    });
  }
}

export default SavedJobsPage;
