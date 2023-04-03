import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import LabeledInputCheckBox from "./LabeledInputCheckBox";

export default function BasicMenu({ setFilter, filter }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dateFilter, setDateFilter] = React.useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateFilter = (e) => {
    const filterDate = e.target.value; //2023-04-04
    setDateFilter(filterDate);
    let formatDate = filterDate.split("-").reverse();
    formatDate[2] = formatDate[2][2] + formatDate[2][3];
    formatDate = formatDate.join("-");
    // console.log(formatDate);

    setFilter((prevState) => {
      return { ...prevState, Date: formatDate };
    });
  };

  const handleResetFilter = () => {
    setFilter({ Location: [], Gender: [], Date: "" });
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{ padding: 0, minWidth: 0, color: "black" }}
        onClick={handleClick}
      >
        <TuneSharpIcon sx={{ fontSize: "2rem" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <LabeledInputCheckBox
            parent="Location"
            children={["Bangalore", "Chennai", "Hyderabad"]}
            setFilter={setFilter}
            filter={filter}
          />
        </MenuItem>
        <MenuItem>
          <LabeledInputCheckBox
            parent="Gender"
            children={["Male", "Female"]}
            setFilter={setFilter}
            filter={filter}
          />
        </MenuItem>
        <MenuItem>
          <label style={{ fontWeight: "600" }}>Date : </label>
          <input type="Date" onChange={handleDateFilter} value={dateFilter} />
        </MenuItem>
        <Button
          onClick={handleResetFilter}
          sx={{
            width: "2rem",
            height: "1.5rem",
            background: "#010165de",
            fontSize: "0.7rem",
            color: "white",
            marginLeft: "1rem",
            "&:hover": { color: "#010165de", border: "1px solid #010165de" },
          }}
        >
          Reset
        </Button>
      </Menu>
    </div>
  );
}
