const Slider = () => {
    return (
        <section className="bg-gray">
            <div className="container py-5 text-wrap rounded-4 text-center px-sm-4">
                <div className='mb-4'>
                    <span className='px-3 py-2 bg-white text-center text-slate rounded-4' style={{ fontSize: "3rem" }}>❤️</span>
                </div>
                <h2 className="mb-5 text-center">Create great memories with us!</h2>
                <div className="slider-container" md="12">
                    <div className="sliding-background">
                    </div>
                </div>
            </div >
        </section>
    );
}

export default Slider;