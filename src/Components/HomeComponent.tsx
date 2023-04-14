
import PaginationComponent from "../Components/PaginationComponent";
import TableComponent from "../Components/TableComponent"
import DropDownComponent from "./DropDownComponent";
import SelectComponent from "./SelectComponent";
export const HomeComponent = () => {
    return (
        <>
            <div style={{display: 'flex', marginBottom: '20px', marginTop: '20px'}}>
            <DropDownComponent />
            <SelectComponent />
            </div>
            <TableComponent />
            <PaginationComponent/>
        </>
    )
}