function customRender(reactElement, container){
    // Method #1
    // const dom .appendChild(domElement);

    // Method #2
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.style.fontSize = '20px';
    for(const prop in reactElement.props){
        if(prop === 'children'){
            continue;
        }
        domElement.setAttribute(prop,reactElement.props[prop]);
        
    }
    container.appendChild(domElement);
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to Visit Google'
}


const mainContainer = document.querySelector("#root")
customRender(reactElement,mainContainer)
