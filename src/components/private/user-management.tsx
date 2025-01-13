import React from "react";
import { Card, CardContent } from "../ui/card";
import UserTable from "./user-table";

const UserManagement = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        <Card>
          <CardContent>
            <UserTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserManagement;
