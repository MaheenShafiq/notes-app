import { Component, type ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false }

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error : unknown, info : unknown) {
        console.log('Caught by error boundary', error, info)
    }

    render(){
        if(this.state.hasError){
            return this.props.fallback ??  <div>Sometging went wrong</div>;
        }
        return this.props.children
    }

}


export default ErrorBoundary;