import React from "react"

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasErr: false }
    }

    static getDerivedStateFromError(error) {
        return { hasErr: true }
    }

    componentDidCatch(err, errInfo) {
        console.log(err)
        console.log(errInfo)
    }

    render() {
        if (this.state.hasErr) {
            <ErrorComponent />
        }
        return this.props.children
    }
}

const ErrorComponent = () => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <img src="http://res.cloudinary.com/dh90ponfw/image/upload/v1724888273/error_image.webp" alt="" style={{ width: '20rem' }} />
            <h2>404 error mất tiu ùi, hãy quay lại trang trước nha ;-;</h2>
        </div>
    )
}