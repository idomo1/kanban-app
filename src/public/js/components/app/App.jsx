import React from "react"
import { DndProvider } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"

import Header from "../header/Header"
import RowContainer from "../rowContainer/RowContainer"
import List from "../list/List"

export default () => (
        <div>
            <Header />
            <DndProvider backend={HTML5Backend}>
                <RowContainer>
                    <List title="Todo"></List>
                    <List title="Doing"></List>
                    <List title="Done"></List>
                </RowContainer>
            </DndProvider>
        </div>
)
