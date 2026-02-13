"use client";

import { routing } from "@/i18n/routing";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import {
  MdDashboard,
  MdInventory2,
  MdShoppingBag,
  MdGroup,
  MdAnalytics,
  MdSettings,
  MdHomeWork,
} from "react-icons/md";
import { ThemeToggle } from "./ThemeToggle";

// Gluestack UI components
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { Divider } from "@/components/ui/divider";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: MdDashboard },
  { href: "/admin/products", label: "Products", icon: MdInventory2 },
  { href: "/admin/orders", label: "Orders", icon: MdShoppingBag },
  { href: "/admin/customers", label: "Customers", icon: MdGroup },
  { href: "/admin/analytics", label: "Analytics", icon: MdAnalytics },
];

export function Sidebar() {
  const pathname = usePathname();
  const { locale } = useParams();

  return (
    <Box className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 hidden lg:flex flex-col sticky top-0 h-screen">
      <Box className="p-6">
        <HStack space="md" className="items-center">
          <Box className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white">
            <MdHomeWork className="text-2xl" />
          </Box>
          <Heading
            size="xl"
            className="tracking-tight text-slate-800 dark:text-white"
          >
            Bayti
          </Heading>
        </HStack>
      </Box>

      <Box className="flex-1 px-4 mt-4">
        <VStack space="xs">
          {navItems.map((item) => {
            const href = `/${locale}${item.href}`;
            const isActive =
              pathname === href ||
              (item.href !== "/admin" && pathname.startsWith(href));

            const Icon = item.icon;

            return (
              <Link key={item.href} href={href as any} passHref>
                <Pressable
                  className={`flex-row items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                    isActive
                      ? "bg-brand-primary/10"
                      : "hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon
                    className={`text-[20px] ${
                      isActive
                        ? "text-brand-primary"
                        : "text-slate-600 dark:text-slate-400 group-hover:text-brand-primary"
                    }`}
                  />
                  <Text
                    className={`font-medium text-sm ${
                      isActive
                        ? "text-brand-primary"
                        : "text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              </Link>
            );
          })}

          <Box className="pt-4 mt-4">
            <Divider className="bg-slate-100 dark:bg-slate-800 mb-4" />
            <Link href={`/${locale}/admin/settings` as any} passHref>
              <Pressable
                className={`flex-row items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                  pathname.includes("/settings")
                    ? "bg-brand-primary/10"
                    : "hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
              >
                <MdSettings
                  className={`text-[20px] ${
                    pathname.includes("/settings")
                      ? "text-brand-primary"
                      : "text-slate-600 dark:text-slate-400 group-hover:text-brand-primary"
                  }`}
                />
                <Text
                  className={`font-medium text-sm ${
                    pathname.includes("/settings")
                      ? "text-brand-primary"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  Settings
                </Text>
              </Pressable>
            </Link>
          </Box>
        </VStack>
      </Box>

      <Box className="p-4 border-t border-slate-100 dark:border-slate-800">
        <VStack space="md">
          <HStack className="items-center justify-between">
            <Text
              size="xs"
              className="font-semibold uppercase tracking-wider text-slate-500"
            >
              Theme
            </Text>
            <ThemeToggle />
          </HStack>

          <HStack
            space="md"
            className="p-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl items-center"
          >
            <Box className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADgG5eIodd1VRdFUvOm4ITIKWtNhXlLIRs--20UcbQsCOUGpWq4pDQcn9jLyewZaV0mgGyoD7ywT87f5N7tl2L1-N23LdPd95X1fvQUH1EC9KZ_FIN3jUvmFIMgNGjdz-uvdk256O1HBLJ6so4Eayhggtivcuw3R1SjPxvLo-J7WBQv16xRhsGbMNwhlp2mYZdrXFIjOSChTXiQEmUaNJU4bdXULHd5-ENXtDWFWuUHiV8fYVgjQMIHDVe_6XYuKIXhhO-LZJ3aOEj"
                alt="Admin user profile headshot"
                fill
                className="object-cover"
              />
            </Box>
            <VStack className="overflow-hidden flex-1">
              <Text
                size="sm"
                className="font-semibold truncate text-slate-800 dark:text-white"
              >
                Alex Rivera
              </Text>
              <Text size="xs" className="text-slate-500 truncate">
                Store Manager
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
