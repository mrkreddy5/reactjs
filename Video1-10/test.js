let heading = React.createElement(
    'h1', {
        
    },
    "This is new course"
)

// let ele = document.getElementById('root');

// let root = ReactDOM.createRoot(ele);

// root.render(heading);

let para = React.createElement(
    'p', {
        
    },
    "This is new para"
)

let wrapper = React.createElement(
    'div', {    
    },
    [heading,para]
)

let ele = document.getElementById('root');

let root = ReactDOM.createRoot(ele);

root.render(wrapper);