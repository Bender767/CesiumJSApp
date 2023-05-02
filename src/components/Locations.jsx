
function Locations(props) {

    let [locations, updateLocations] = props.locationState

    let letters = ['a','b','c']
    let upperCaseLetters = letters.map((letter) => {
        return letter.toUpperCase()
    })

    function mapMimic(arr, cb) {
        let result = []
        for (let i = 0 ; i < arr.length ; i++) {
            result.push( cb(arr[i]) )
        }
        return result
    }

    function deleteLocation(i) {
        let newLocations = [...locations]
        newLocations.splice(i, 1)
        updateLocations(newLocations)
    }

    function go(location){

    }

    /*
        callbacks
        anonymous functions
        arrow syntax
        higher-order functions
        destructuring
        ternary operators
    */

    let renderedLocations = locations.map((location, i) => {
        return (
            <div className="location" key={i}>
                lat: {location.lat} <br />
                lon: {location.lon} <br />
                name: {location.name} <br />
                <button onClick={()=>{deleteLocation(i)}}>
                    Delete
                </button>
                <button onClick={()=>{go(location)}}>
                    GO
                </button>
            </div>
        )
    })

    return (
        <div id="locations">
            {renderedLocations}
        </div>
    )
}

export default Locations