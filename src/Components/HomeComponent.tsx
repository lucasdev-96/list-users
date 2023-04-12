
import PaginationComponent from "../Components/PaginationComponent";
import TableComponent from "../Components/TableComponent"
import DropDownComponent from "./DropDownComponent";
export const HomeComponent = () => {
    return (
        <div className="home">
            <DropDownComponent />
            <TableComponent />
            <PaginationComponent/>
        </div>
    )
}