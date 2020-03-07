const view = `
<table>
    {{#data}}
    <tr>
        <td>Name</td>
        <td>{{name}}</td>
    </tr>
    <tr>
        <td>Age</td>
        <td>{{age}}</td>
    </tr>
    <tr>
        <td>Sex</td>
        <td>{{sex}}</td>
    </tr>
    {{/data}}
</table>
`;

class CpPerson extends HTMLElement {
    constructor() {
        super();
    }

    render(data) {
        this.innerHTML = Mustache.render(view, {data: data});
    }

}

customElements.define('cp-person', CpPerson);
