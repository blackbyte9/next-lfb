"use client";

import { createColumn, createFilterBehavior, GridOptions } from "@ezgrid/grid-core";
import { ReactDataGrid } from "@ezgrid/grid-react";
import "@ezgrid/grid-core/styles.css"
import "@ezgrid/grid-core/icons.css"
import { users } from "@/lib/users/seed_data";
import { useMemo } from "react";
import { useTheme } from "@mui/material";


export default function DataGrid() {

    const columns = useMemo(() => ([
        createColumn("id", "number", "Id"),
        createColumn("name", "string", "Name"),
        createColumn("password", "string", "Passwort"),
        createColumn("status", "string", "Status"),
        createColumn("type", "string", "Type"),
    ]), []);
    const uniqueIdentifierOptions = useMemo(() => ({
        useField: "id",
    }), []);

    const theme = useTheme();

    const gridOptions = useMemo<GridOptions>(() => ({
        dataProvider: users,
        uniqueIdentifierOptions: uniqueIdentifierOptions,
        enablePaging: true,
        enableFilters: false,
        enableGlobalSearch: false,
        toolbarOptions: {
            enableGlobalSearch: true
        },
        behaviors:[createFilterBehavior({})],
    }), [users, uniqueIdentifierOptions]);
    return (
        <ReactDataGrid
            style={{ height: "300px", width: "100%" }}
            gridOptions={gridOptions}
        ></ReactDataGrid>
    );
}