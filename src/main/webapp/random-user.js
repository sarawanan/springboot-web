const view = `
<table>
    {{#results}}
    <tr>
        <td>Gender</td>
        <td>{{gender}}</td>
    </tr>
    <tr>
        <td>Title</td>
        <td>{{name.title}}</td>
    </tr>
    <tr>
        <td>First Name</td>
        <td>{{name.first}}</td>
    </tr>
    <tr>
        <td>Last Name</td>
        <td>{{name.last}}</td>
    </tr>
    <tr>
        <td>Address</td>
        <td>
            {{location.street.number}}
            {{location.street.name}}
            {{location.city}}
            {{location.state}}
            {{location.country}}
            {{location.postcode}}
        </td>
    </tr>
    {{/results}}
</table>
`;

class RandomUser extends HTMLElement {
    constructor() {
        super();
    }

    render(data) {
        this.innerHTML = Mustache.render(view, data);
    }

}

customElements.define('random-user', RandomUser);
