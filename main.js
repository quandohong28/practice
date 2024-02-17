
const body = document.querySelector('#body')

const show = () => {
    fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => {
            body.innerHTML = data.map((item, index) => {
                return `
                    <tr class="">
                        <td scope="row">${item.id}</td>
                        <td scope="row">${item.name}</td>
                        <td scope="row"><img src="${item.image}" alt=""></td>
                        <td scope="row">${item.price}</td>
                        <td>
                        <button class="btn btn-sm btn-danger btn-delete" data-id="${item.id}">Delete</button>
                        </td>
                    </tr>
                `
            }).join("")
        })
        .then(() => {
            const btnDelete = document.querySelectorAll('.btn-delete')
            for (const btn of btnDelete) {
                btn.addEventListener('click', () => {
                    const id = btn.dataset.id
                    fetch(`http://locahost:3000/products/${id}`, {
                        method: "DELETE"
                    })
                })
            }
        })
}

show()
