import React from "react";
import { useSelector } from "react-redux";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const TableComponent = () => {
  const formData = useSelector((state) => state?.form?.form);
  // console.log("Table TTTTTTTT", formData);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Confirm Password</TableCell>
            <TableCell>Media File</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{index}</TableCell>
              <TableCell>{data.firstName}</TableCell>
              <TableCell>{data.lastName}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.password}</TableCell>
              <TableCell>{data.confirmPassword}</TableCell>
              <TableCell>
                {data.mediaFile && (
                  <a href={URL.createObjectURL(data.mediaFile)} download>
                    {data.mediaFile.name}
                  </a>
                )}
              </TableCell>
              <TableCell>{data.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
