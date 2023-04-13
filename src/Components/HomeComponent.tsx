
import PaginationComponent from "../Components/PaginationComponent";
import TableComponent from "../Components/TableComponent"
import DropDownComponent from "./DropDownComponent";
export const HomeComponent = () => {
    return (
        <>
            <DropDownComponent />
            <TableComponent />
            <PaginationComponent/>
        </>
    )
}