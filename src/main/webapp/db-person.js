const view = `
<table>
    {{#data}}
    <tr>
        <td>ID</td>
        <td>{{id}}</td>
    </tr>
    <tr>
        <td>First Name</td>
        <td>{{firstName}}</td>
    </tr>
    <tr>
        <td>Last Name</td>
        <td>{{lastName}}</td>
    </tr>
    <tr>
        <td>Age</td>
        <td>{{age}}</td>
    </tr>
    {{/data}}
</table>
`;

class DbPerson extends HTMLElement {
    constructor() {
        super();
    }

    render(data) {
        this.innerHTML = Mustache.render(view, {data: data});
    }

}

customElements.define('db-person', DbPerson);
