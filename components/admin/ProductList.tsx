"use client";

import Image from "next/image";
import {
  MdExpandMore,
  MdEdit,
  MdDeleteOutline,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

// Gluestack UI components
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import { Badge, BadgeText } from "@/components/ui/badge";
import { Divider } from "@/components/ui/divider";
import { Pressable } from "@/components/ui/pressable";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableData,
} from "@/components/ui/table";

const products = [
  {
    id: 1,
    name: "IRIS Air Fryer 10L",
    subtitle: "Digital Touch Display",
    sku: "IRIS-AF-10",
    category: "Kitchen",
    status: "In Stock",
    price: "$129.00",
    sales: 452,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgIqRgg2Woj_-iTT0LoOZYs_KZ1W1QLVSxV8EINfW8h1mh_7k56CHaeF4v2OQM5I3oTcEAyx_EzShUp5W5x0N1cIC29ftmV9a5ysPE23jiIR4rP6gsPa2LhOke-5bSMPqh3iZc0Bn9BQuWOPVQwQJPUGdqv_9ZL7NHqHPHmoDfgL9zyXP6s_VyywjPGdaH-ewJGRIY43J_HYGslYVm35w5Q4Y6XLzrT3SMhB9YeY4e4sIuAduBmtfEpXEY9dHtuFibvazeNlYoHr1B",
  },
  {
    id: 2,
    name: "Electric Garlic Machine",
    subtitle: "USB Rechargeable",
    sku: "EGM-02",
    category: "Kitchen",
    status: "Low Stock",
    price: "$24.99",
    sales: 1208,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDW--Bz-duDjfwjhpepgyRhX18_AV-UxSKJql77b7IRhL_KO8asM9oWgRnJ6KSsFEear2RyyrUSTIbykH7y69qLDF02Xu5c9oILi3uAJutVjvKqlHlmQM7UHBGYERxf1ApBAj0Xqn4aZ4dtuz9FsKhhhZo5FW0kWxpjPZdljlcp-z6VqAgRkdLIzG3A1QY5klpgcQXD8fhAZdZjrnHXD_K7nEUY9dhjsBXuEIVvkm9IKJ1afqDyyIA30TtzVSt-A3zHApdnN47tO0kE",
  },
  {
    id: 3,
    name: "Portable Blender Max",
    subtitle: "BPA Free Plastic",
    sku: "PBM-005",
    category: "Kitchen",
    status: "In Stock",
    price: "$45.00",
    sales: 85,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAN_wT9gzmxzydviX4rmoyPieb1mP0qEDWtG7zS5cqN1nAqEffG6mlOBSpJMhQStiuNs4kwSOEoxeFbOTtj21O8ShK0OogW1LcF0nyaBlUBn14PtYytDjXqDcgebZ03YAqFkdnZfn3kb638-hsueGYnlyJMoRoiIvXnIrGuA4thKqwuopau2jvO6UFNfVg_2vfm16SWLYnK3lzY8oBad4_4mq6LuKtIKSSK_rZkU32yRATNlbqlajN-wqLtoc5A1Or2sz3hZkqzLPJC",
  },
  {
    id: 4,
    name: "Pro Steam Iron v2",
    subtitle: "Ceramic Soleplate",
    sku: "PSI-99",
    category: "Cleaning",
    status: "Out of Stock",
    price: "$59.90",
    sales: 310,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCS86TK3g0pxmsmoi9IbMr-9t7_vM023w7aVbYKQ438gUlbnHU_UGInLWqI5aPgWOJjkFtp7u4bYT7cWbpHIl0k9pFr7W7GXYwgOLRstRf3rogn8Qvo8HQbkQVwQykJOMfeZCQsx-Uu45_Kb215IbTaZxN917Rpe1HfH2hlVIkkO5t6M_tdfeGLfY4TkC_kTWi10QlwMkoyrK9BVyDkdqb3q8vPLsA-OdSm1bTrSCE9-VZGluSuUMul4CDVXct2iu5E0CbiI7-Tu95R",
  },
];

export function ProductList() {
  return (
    <Box className="p-8">
      {/* Filter Bar */}
      <HStack space="md" className="mb-6 flex-wrap items-center">
        {["Category", "Status", "Stock Levels"].map((filter) => (
          <Button
            key={filter}
            size="sm"
            variant="outline"
            className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-lg"
          >
            <ButtonText className="text-slate-800 dark:text-white font-medium">
              {filter}
            </ButtonText>
            <ButtonIcon as={MdExpandMore} className="text-slate-400 ml-2" />
          </Button>
        ))}
        <Divider
          orientation="vertical"
          className="h-8 bg-slate-200 dark:bg-slate-800 mx-2"
        />
        <Pressable>
          <Text
            size="sm"
            className="font-medium text-slate-500 hover:text-brand-primary transition-colors"
          >
            Clear all filters
          </Text>
        </Pressable>
      </HStack>

      {/* Table Card */}
      <Box className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <Box className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              <TableRow>
                <TableHead className="px-6 py-4">
                  <Text
                    size="2xs"
                    className="font-bold uppercase tracking-wider text-slate-500"
                  >
                    Image
                  </Text>
                </TableHead>
                <TableHead className="px-6 py-4">
                  <Text
                    size="2xs"
                    className="font-bold uppercase tracking-wider text-slate-500"
                  >
                    Product Name
                  </Text>
                </TableHead>
                <TableHead className="px-6 py-4">
                  <Text
                    size="2xs"
                    className="font-bold uppercase tracking-wider text-slate-500"
                  >
                    SKU
                  </Text>
                </TableHead>
                <TableHead className="px-6 py-4">
                  <Text
                    size="2xs"
                    className="font-bold uppercase tracking-wider text-slate-500"
                  >
                    Category
                  </Text>
                </TableHead>
                <TableHead className="px-6 py-4">
                  <Text
                    size="2xs"
                    className="font-bold uppercase tracking-wider text-slate-500"
                  >
                    Status
                  </Text>
                </TableHead>
                <TableHead className="px-6 py-4">
                  <Text
                    size="2xs"
                    className="font-bold uppercase tracking-wider text-slate-500"
                  >
                    Price
                  </Text>
                </TableHead>
                <TableHead className="px-6 py-4 text-center">
                  <Text
                    size="2xs"
                    className="font-bold uppercase tracking-wider text-slate-500"
                  >
                    Sales
                  </Text>
                </TableHead>
                <TableHead className="px-6 py-4 text-right">
                  <Text
                    size="2xs"
                    className="font-bold uppercase tracking-wider text-slate-500"
                  >
                    Actions
                  </Text>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-slate-100 dark:divide-slate-800">
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  className="hover:bg-brand-primary/5 transition-colors group"
                >
                  <TableData className="px-6 py-4">
                    <Box className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-700 relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </Box>
                  </TableData>
                  <TableData className="px-6 py-4">
                    <VStack>
                      <Text
                        size="sm"
                        className="font-semibold text-slate-900 dark:text-white"
                      >
                        {product.name}
                      </Text>
                      <Text
                        size="xs"
                        className="text-slate-500 dark:text-slate-400"
                      >
                        {product.subtitle}
                      </Text>
                    </VStack>
                  </TableData>
                  <TableData className="px-6 py-4">
                    <Text
                      size="sm"
                      className="text-slate-600 dark:text-slate-400"
                    >
                      {product.sku}
                    </Text>
                  </TableData>
                  <TableData className="px-6 py-4">
                    <Badge className="bg-slate-100 dark:bg-slate-800 rounded">
                      <BadgeText
                        className="text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider"
                        size="sm"
                      >
                        {product.category}
                      </BadgeText>
                    </Badge>
                  </TableData>
                  <TableData className="px-6 py-4">
                    <Badge
                      className={`rounded-full px-3 py-1 ${
                        product.status === "In Stock"
                          ? "bg-status-success/10"
                          : product.status === "Low Stock"
                            ? "bg-status-warning/10"
                            : "bg-status-error/10"
                      }`}
                    >
                      <BadgeText
                        className={`font-semibold ${
                          product.status === "In Stock"
                            ? "text-status-success"
                            : product.status === "Low Stock"
                              ? "text-status-warning"
                              : "text-status-error"
                        }`}
                        size="sm"
                      >
                        {product.status}
                      </BadgeText>
                    </Badge>
                  </TableData>
                  <TableData className="px-6 py-4">
                    <Text
                      size="sm"
                      className="font-semibold text-slate-900 dark:text-white"
                    >
                      {product.price}
                    </Text>
                  </TableData>
                  <TableData className="px-6 py-4 text-center">
                    <Text
                      size="sm"
                      className="text-slate-600 dark:text-slate-400"
                    >
                      {product.sales.toLocaleString()}
                    </Text>
                  </TableData>
                  <TableData className="px-6 py-4">
                    <HStack space="xs" className="justify-end">
                      <Pressable className="p-2 text-slate-400 hover:text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-all">
                        <MdEdit className="text-[20px]" />
                      </Pressable>
                      <Pressable className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                        <MdDeleteOutline className="text-[20px]" />
                      </Pressable>
                    </HStack>
                  </TableData>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>

        {/* Footer / Pagination */}
        <Box className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800">
          <HStack className="items-center justify-between">
            <Text size="sm" className="text-slate-500 font-medium">
              Showing{" "}
              <Text
                size="sm"
                className="text-slate-900 dark:text-white font-bold"
              >
                1-10
              </Text>{" "}
              of{" "}
              <Text
                size="sm"
                className="text-slate-900 dark:text-white font-bold"
              >
                45
              </Text>{" "}
              products
            </Text>
            <HStack space="xs" className="items-center">
              <Button
                variant="outline"
                size="sm"
                isDisabled
                className="w-9 h-9 p-0 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
              >
                <ButtonIcon
                  as={MdChevronLeft}
                  className="text-slate-400"
                  size="md"
                />
              </Button>
              <HStack space="xs" className="items-center">
                <Button size="sm" className="w-9 h-9 p-0 bg-brand-primary">
                  <ButtonText className="text-white font-bold">1</ButtonText>
                </Button>
                {[2, 3].map((page) => (
                  <Button
                    key={page}
                    variant="link"
                    size="sm"
                    className="w-9 h-9 p-0 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <ButtonText className="text-slate-800 dark:text-white font-medium">
                      {page}
                    </ButtonText>
                  </Button>
                ))}
                <Text size="sm" className="px-1 text-slate-400">
                  ...
                </Text>
                <Button
                  variant="link"
                  size="sm"
                  className="w-9 h-9 p-0 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <ButtonText className="text-slate-800 dark:text-white font-medium">
                    5
                  </ButtonText>
                </Button>
              </HStack>
              <Button
                variant="outline"
                size="sm"
                className="w-9 h-9 p-0 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
              >
                <ButtonIcon
                  as={MdChevronRight}
                  className="text-slate-600 dark:text-slate-400"
                  size="md"
                />
              </Button>
            </HStack>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
