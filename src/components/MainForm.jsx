// import { useRef } from 'react'

function MainForm(props) {

    let [locations, updateLocations] = props.locationState

    function submitHandler(e) {
        e.preventDefault()
        let form = e.target
        let lat = form.lat.value
        let lon = form.lon.value
        let name = form.name.value

        let newLocations = [...locations, {
            lat,
            lon,
            name
        }]

        updateLocations(newLocations)
    }

    return (
        <div id="mainForm">
            <form onSubmit={submitHandler}>
                <input name="lat" placeholder="latitude" />
                <input name="lon" placeholder="longitude" />
                <input name="name" placeholder='place name' />
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default MainForm