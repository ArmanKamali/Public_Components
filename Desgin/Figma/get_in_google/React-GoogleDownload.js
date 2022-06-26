const GoogleDownload = () => {
    let mouseEnterHandler = (e) => {
        
        let image = e.target

        image.src = '/images/GoogleDownload_hover.png'
    }

    let mouseLeaveHandler = (e) => {
        let image = e.target

        image.src = '/images/GoogleDownload.png'
    }
    return (
        <div>
            <img src="/images/GoogleDownload.png"
                style={{ borderRadius: 10, marginTop: 20, width: 150}}
                onMouseEnter={(e) => mouseEnterHandler(e)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
            />
        </div>
    );
}

export default GoogleDownload;