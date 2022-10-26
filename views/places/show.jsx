const React = require('react')
const Def = require('../default')

function show (data){
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <p className='text-center'>{data.place.cuisines}</p>
                <p className='text-center'>Located in {data.place.city}, {data.place.state}</p>
                <img src={data.place.pic} alt={data.place.name}/>
                <div className='RandCbox'>
                    <div className='ratings'>
                        <h2>Ratings</h2>
                        <p>Be The First To Rate!</p>
                    </div>
                    <div>
                        <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                    </div>
                    <div>
                        <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                            <button type='submit' className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>
                    <div className='comments'>
                        <h2>Comments</h2>
                        <p>Leave The First Comment Now!</p>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show