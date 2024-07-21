import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Research");
    }

    async getHtml() {
        return `
            <h1>Latest Research</h1>
            <p>This would be a page showing the current research the company is involved in.</p>
        `;
    }
}