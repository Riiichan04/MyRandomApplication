export default function ComingSoon() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <img src={process.env.REACT_APP_CLOUDINARY + "/v1724888273/coming_sooon_image.webp"} alt="" style={{width: '20rem'}} />
            <h2>Chờ mãi không load được sao? Vì tính năng này đang được phát triển đó!!!</h2>
        </div>
    )
}