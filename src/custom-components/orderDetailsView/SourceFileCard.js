import {Card, CardBody, CardFooter, CardHeader} from "reactstrap"
import {Clipboard} from "react-feather"

const SourceFileCard = ({data}) => {

    const getTheDownloadFile = () => {
        window.open(data.sourceFile, "_blank")
    }

    return <Card className="mr-2 p-0" style={{width: "31%"}}>
        <CardHeader className="bg-gradient-primary text-light m-0 text-small lead font-bold">
            <div className="d-flex align-items-center">
                <Clipboard className="mr-1"/>
                Main source
                files
            </div>
        </CardHeader>
        <CardBody>
            <div className="mt-2">
                <p>{data.description}</p>
            </div>
        </CardBody>
        <CardFooter>
            <div className="w-100 d-flex justify-content-end">
                <button
                    onClick={getTheDownloadFile}
                    className="btn btn-foursquare">Get the file</button>
            </div>
        </CardFooter>
    </Card>
}

export default SourceFileCard