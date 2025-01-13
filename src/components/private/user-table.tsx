"use client";
import React, { useEffect, useState } from "react";
import { User, users as user_constants } from "@/constants/index.c";
import { ColumnDef } from "@tanstack/react-table";
import SortableTable from "./sortable-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { EllipsisVerticalIcon } from "lucide-react";
import EditTableModel from "./edit-table-model";
import DeleteUserModel from "./delete-user-model";
import { useToast } from "@/hooks/use-toast";
import { v4 as uuidv4 } from "uuid";
import { useUsers } from "@/hooks/use-users";
import { updateUser } from "@/hooks/update-users";
import { deleteUser } from "@/hooks/delete-user";

const UserTable = () => {
  const [tableData, setTableData] = useState<User[]>(user_constants);
  const [editableRow, setEditableRow] = useState<Partial<User>>({
    _id: uuidv4(),
    name: "",
    email: "",
    phone: "",
    address: "",
    isActive: true,
  });
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [openDeleteModel, setopenDeleteModel] = useState(false);
  const { toast } = useToast();
  const { error, isLoading, users } = useUsers();

  useEffect(() => {
    if (!isLoading && error === null && users) {
      setTableData(users);
      console.log(users);
    } else if (!isLoading && error) {
      toast({
        title: "failed to fetch users",
        description: error,
        variant: "destructive",
      });
      console.log("user else if");
    } else {
      console.log("user else");
    }
  }, [users]);

  const handleEditUser = async (user: Partial<User>) => {
    const userIndex = tableData.findIndex((usr) => usr._id === user._id);
    if (userIndex !== -1) {
      const { data, error } = await updateUser({
        _id: user._id,
        role: user.role,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      });
      if (data && error === null) {
        tableData[userIndex].role = user.role
          ? user.role
          : tableData[userIndex].role;
        tableData[userIndex].name = user.name
          ? user.name
          : tableData[userIndex].name;
        tableData[userIndex].email = user.email
          ? user.email
          : tableData[userIndex].email;
        tableData[userIndex].phone = user.phone
          ? user.phone
          : tableData[userIndex].phone;
        tableData[userIndex].address = user.address
          ? user.address
          : tableData[userIndex].address;
        setTableData(tableData);
        toast({
          title: `${user.name} is Updated`,
        });
      } else {
        toast({
          variant: "destructive",
          title: `Update Failded`,
          description: error,
        });
      }
    } else {
      toast({
        variant: "destructive",
        title: `${user.name} is Update Failded`,
      });
    }
  };

  const handleDeleteUser = async (user: Partial<User>) => {
    if (!user._id) {
      const { data, error } = await deleteUser(user);

      if (data && error === null) {
        const filtered_table_data = tableData.filter(
          (item) => item._id !== user._id
        );

        if (filtered_table_data.length < 1) return;
        setTableData(filtered_table_data);
        toast({
          title: "user deleted",
        });
      } else {
        toast({
          title: "something went wrong",
          description: error,
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "something went wrong",
        description: "user id missing!",
        variant: "destructive",
      });
    }
  };

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        return <div className="font-medium"> {row.getValue("name")}</div>;
      },
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }) => (
        <p className="font-medium whitespace-nowrap">{row.getValue("phone")}</p>
      ),
    },
    {
      accessorKey: "address",
      header: "Address",
      cell: ({ row }) => (
        <div className="font-medium whitespace-nowrap">
          {row.getValue("address")}
        </div>
      ),
    },
    {
      accessorKey: "joinedDate",
      header: "Joining Date",
      cell: ({ row }) => {
        const dataString: string = row.getValue("joinedDate");
        const date = new Date(dataString);
        const formatedDate = date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        return <div className="font-medium">{formatedDate}</div>;
      },
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue("role")}</div>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(buttonVariants({ size: "icon", variant: "ghost" }))}
            >
              <EllipsisVerticalIcon className="w-4 h-4 shrink-0 " />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  setEditableRow(row.original);
                  setModelOpen(true);
                }}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="bg-red-500 text-white focus:bg-red-400 focus:text-white"
                onClick={() => {
                  setEditableRow(row.original);
                  setopenDeleteModel(true);
                }}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="w-full">
      <SortableTable
        key={JSON.stringify(tableData)}
        data={tableData}
        columns={columns}
        isLoading={isLoading}
      />
      <EditTableModel
        open={modelOpen}
        onOpenChange={() => setModelOpen(!modelOpen)}
        editableRow={editableRow}
        handleEditUser={handleEditUser}
      />
      <DeleteUserModel
        open={openDeleteModel}
        onOpenChange={() => setopenDeleteModel(!openDeleteModel)}
        user={editableRow}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
};

export default UserTable;
