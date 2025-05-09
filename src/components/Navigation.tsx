
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  const navigate = useNavigate();
  
  const handleCartClick = () => {
    navigate("/login");
  };
  
  return (
    <div className="flex items-center justify-between py-4">
      <Link 
        to="/" 
        className="text-2xl font-bold text-baju-heading hover:opacity-80 transition-opacity"
      >
        BajuKawen.com
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <Link
              to="/login"
              className="text-baju-subtext hover:text-baju-heading transition-colors"
            >
              Login/SignUp
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/vendor-login"
              className="text-baju-subtext hover:text-baju-heading transition-colors"
            >
              Vendor Portal
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-baju-heading"
              onClick={handleCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
