import { Button, Divider, Flex, Menu, MenuButton, MenuItem, MenuList, useToast } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsCart2, BsFillCaretDownFill } from "react-icons/bs";
import { RiLuggageCartLine, RiCoupon3Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { logoutFromAccount } from "../../redux/features/auth/actions";


export const Logout = () => {

    const dispatch = useDispatch();
    const toast = useToast();
    const user = useSelector((state)=> state.authReducer.user.firstName);

    const handleLogoutBtn = ()=>{
        dispatch(logoutFromAccount(toast));
    };

    
    return (
        <>
            <Menu>
                <MenuButton as={Button} size='sm' bg={'transparent'} rightIcon={<BsFillCaretDownFill />}>{user}</MenuButton>
                <MenuList >
                    <Flex flexDirection={'column'} gap={'5px'} fontSize={'17px'}>
                        <MenuItem icon={<FaRegHeart />} >
                            Wishlist
                        </MenuItem>
                        <MenuItem icon={<RiLuggageCartLine />} >
                            Orders
                        </MenuItem>
                        <MenuItem icon={<RiCoupon3Line />} >
                            Coupons
                        </MenuItem>
                        <MenuItem icon={<BsCart2 />} >
                            Cart
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleLogoutBtn} icon={<FiLogOut />}>
                            Logout
                        </MenuItem>
                    </Flex>
                </MenuList>
            </Menu>
        </>
    );
};