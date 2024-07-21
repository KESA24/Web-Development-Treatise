import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Blog</h1>
            <p>This is a page served showing blog articles regarding the company</p>
        `;
    }
}