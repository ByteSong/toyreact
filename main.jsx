import { ToyReact, Component} from "./ToyReact.js"
class MyComponent extends Component{
    render() {
        return <div>
            <span>Hello </span>
            <span>ByteSong!</span>
            <br/>
            <div>
                {this.children}
                <br/>
                {new Date}
                {true}
            </div>
        </div>
    }
}
let a = (
    <MyComponent name='a'>
        <div>每天都是崭新的！</div>
    </MyComponent>
)


ToyReact.render(a, document.body)