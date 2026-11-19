
class JobsPage {
  constructor(page) {
    this.page = page;

    this.discoverJobsLink = page.getByRole("link", {
      name: "Discover Jobs"
    });

    this.searchInput = page.getByLabel("Search jobs");

    this.categoryFilter = page.getByLabel("Category filter");

    this.jobsHeading = page.getByRole("heading", {
      name: "Discover internships"
    });
  }

  async open() {
    await this.discoverJobsLink.click();
  }

  async verifyJobsPage() {
    await this.jobsHeading.waitFor({
      state: "visible"
    });
  }
}

export default JobsPage;
