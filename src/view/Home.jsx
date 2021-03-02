import Fight from '../assets/images/fight.png'

const Home = () => {
    return (
        <div>
            <div className='container p-5 row mt-3'>
                <div className="col-6 p-5">
                    <div className="p-5">
                        <h3 className="mt-5">We Provide Data </h3>
                        <h3 className="my-2"><span className="text-danger font-weight-bold">for Covid-19 Cases!</span></h3>
                    </div>
                    <form action="" >
                        <div className="input-group my-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">
                                    <i class="far fa-envelope"></i></span>
                            </div>
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <button className="btn btn-info float-right rounded-pill">Subscribe</button>
                    </form>
                </div>
                <div className="col-6 d-flex flex-column align-items-end">
                    <div className="d-flex">
                        <img width="350px" height="400px" src={Fight} alt="fight" />
                    </div>
                    <div className="text-right">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab sapiente porro iusto amet esse praesentium repellat suscipit laboriosam, rem tempora, quisquam numquam voluptatem ratione pariatur similique modi dolorum in odit possimus quod. Eligendi obcaecati veritatis corporis sed sequi accusantium suscipit praesentium quaerat? Id laboriosam repellendus perferendis? Minima, eum inventore!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home