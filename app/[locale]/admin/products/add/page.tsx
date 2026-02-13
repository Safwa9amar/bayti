"use client";

import {
  MdInfo,
  MdPayments,
  MdListAlt,
  MdAddCircle,
  MdAir,
  MdTimer,
  MdRestaurant,
  MdDelete,
  MdReviews,
  MdStar,
  MdImage,
  MdCloudUpload,
  MdAdd,
  MdPublish,
  MdEdit,
} from "react-icons/md";
import { AdminHeader } from "@/components/admin/Header";

// Gluestack UI components
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { Grid, GridItem } from "@/components/ui/grid";
import { Icon, ChevronDownIcon } from "@/components/ui/icon";

export default function AddProductPage() {
  return (
    <Box className="flex-1 bg-slate-50 dark:bg-slate-950">
      <AdminHeader
        title="Add New Product"
        breadcrumbs={[
          { label: "Products", href: "/admin/products" },
          { label: "Add New" },
        ]}
        actions={
          <HStack space="sm">
            <Button variant="outline" className="border-slate-200">
              <ButtonText className="text-slate-600">Cancel</ButtonText>
            </Button>
            <Button className="bg-brand-primary">
              <ButtonText>Save Product</ButtonText>
            </Button>
          </HStack>
        }
      />

      <Box className="p-8 max-w-5xl mx-auto">
        <Grid
          className="gap-8"
          _extra={{
            className: "grid-cols-1 lg:grid-cols-3",
          }}
        >
          {/* Main Content Area */}
          <GridItem
            _extra={{
              className: "lg:col-span-2",
            }}
          >
            <VStack space="xl">
              {/* Basic Information */}
              <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                <VStack space="lg">
                  <HStack space="md" className="items-center">
                    <Icon
                      as={MdInfo}
                      className="text-brand-primary"
                      size="lg"
                    />
                    <Heading size="md">Basic Information</Heading>
                  </HStack>

                  <Divider className="bg-slate-100 dark:bg-slate-800" />

                  <VStack space="md">
                    <Grid
                      className="gap-4"
                      _extra={{ className: "grid-cols-1 md:grid-cols-2" }}
                    >
                      <GridItem _extra={{ className: "col-span-1" }}>
                        <VStack space="xs">
                          <Text
                            size="sm"
                            className="font-semibold text-slate-700 dark:text-slate-300"
                          >
                            Product Title
                          </Text>
                          <Input className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                            <InputField
                              defaultValue="IRIS Air Fryer 10L"
                              className="text-sm"
                            />
                          </Input>
                        </VStack>
                      </GridItem>
                      <GridItem _extra={{ className: "col-span-1" }}>
                        <VStack space="xs">
                          <Text
                            size="sm"
                            className="font-semibold text-slate-700 dark:text-slate-300"
                          >
                            Category
                          </Text>
                          <Select>
                            <SelectTrigger className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                              <SelectInput
                                placeholder="Select category"
                                className="text-sm"
                              />
                              <SelectIcon
                                className="mr-3"
                                as={ChevronDownIcon}
                              />
                            </SelectTrigger>
                            <SelectPortal>
                              <SelectBackdrop />
                              <SelectContent>
                                <SelectItem
                                  label="Cooking Appliances"
                                  value="cooking"
                                />
                                <SelectItem
                                  label="Home Appliances"
                                  value="home"
                                />
                                <SelectItem
                                  label="Kitchen Care"
                                  value="kitchen"
                                />
                              </SelectContent>
                            </SelectPortal>
                          </Select>
                        </VStack>
                      </GridItem>
                    </Grid>

                    <VStack space="xs">
                      <Text
                        size="sm"
                        className="font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Product Description
                      </Text>
                      <Textarea className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                        <TextareaInput
                          defaultValue="Enjoy healthy and delicious cooking with the advanced IRIS Air Fryer with a 10L capacity, perfect for large families and featuring modern technologies to save energy and effort."
                          className="text-sm"
                        />
                      </Textarea>
                    </VStack>
                  </VStack>
                </VStack>
              </Card>

              {/* Pricing & Inventory */}
              <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                <VStack space="lg">
                  <HStack space="md" className="items-center">
                    <Icon
                      as={MdPayments}
                      className="text-brand-primary"
                      size="lg"
                    />
                    <Heading size="md">Pricing & Inventory</Heading>
                  </HStack>

                  <Divider className="bg-slate-100 dark:bg-slate-800" />

                  <Grid
                    className="gap-4"
                    _extra={{ className: "grid-cols-1 md:grid-cols-3" }}
                  >
                    <GridItem _extra={{ className: "col-span-1" }}>
                      <VStack space="xs">
                        <Text
                          size="sm"
                          className="font-semibold text-slate-700 dark:text-slate-300"
                        >
                          Current Price
                        </Text>
                        <Input className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                          <InputField
                            defaultValue="13,000 DZD"
                            className="text-sm"
                          />
                        </Input>
                      </VStack>
                    </GridItem>
                    <GridItem _extra={{ className: "col-span-1" }}>
                      <VStack space="xs">
                        <Text
                          size="sm"
                          className="font-semibold text-slate-700 dark:text-slate-300"
                        >
                          Old Price
                        </Text>
                        <Input className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                          <InputField
                            defaultValue="15,000 DZD"
                            className="text-sm"
                          />
                        </Input>
                      </VStack>
                    </GridItem>
                    <GridItem _extra={{ className: "col-span-1" }}>
                      <VStack space="xs">
                        <Text
                          size="sm"
                          className="font-semibold text-slate-700 dark:text-slate-300"
                        >
                          Discount Label
                        </Text>
                        <Input className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                          <InputField
                            defaultValue="Free Delivery"
                            className="text-sm"
                          />
                        </Input>
                      </VStack>
                    </GridItem>
                  </Grid>
                </VStack>
              </Card>

              {/* Features Management */}
              <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                <VStack space="lg">
                  <HStack className="items-center justify-between">
                    <HStack space="md" className="items-center">
                      <Icon
                        as={MdListAlt}
                        className="text-brand-primary"
                        size="lg"
                      />
                      <Heading size="md">Features Management</Heading>
                    </HStack>
                    <Button variant="link" size="xs" className="p-0">
                      <ButtonIcon as={MdAddCircle} className="mr-1" />
                      <ButtonText className="text-brand-primary font-bold">
                        Add Feature
                      </ButtonText>
                    </Button>
                  </HStack>

                  <Divider className="bg-slate-100 dark:bg-slate-800" />

                  <VStack space="md">
                    {[
                      {
                        icon: MdAir,
                        text: "Fast air technology for healthy frying",
                      },
                      { icon: MdTimer, text: "Smart timer with LED display" },
                      {
                        icon: MdRestaurant,
                        text: "10L capacity for whole chicken",
                      },
                    ].map((feature, i) => (
                      <HStack
                        key={i}
                        className="items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800"
                        space="md"
                      >
                        <Icon
                          as={feature.icon}
                          className="text-slate-400"
                          size="lg"
                        />
                        <Input className="flex-1 bg-transparent border-none">
                          <InputField
                            defaultValue={feature.text}
                            className="text-sm p-0 h-auto"
                          />
                        </Input>
                        <Button variant="link" size="sm" className="p-0">
                          <ButtonIcon
                            as={MdDelete}
                            className="text-slate-300 hover:text-red-500"
                          />
                        </Button>
                      </HStack>
                    ))}
                  </VStack>
                </VStack>
              </Card>

              {/* Customer Reviews */}
              <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                <VStack space="lg">
                  <HStack space="md" className="items-center">
                    <Icon
                      as={MdReviews}
                      className="text-brand-primary"
                      size="lg"
                    />
                    <Heading size="md">Customer Reviews</Heading>
                  </HStack>

                  <Divider className="bg-slate-100 dark:bg-slate-800" />

                  <Grid
                    className="gap-4"
                    _extra={{ className: "grid-cols-1 md:grid-cols-2" }}
                  >
                    {[
                      {
                        name: "Sarah B.",
                        rating: 5,
                        text: "Great product, really helped me prepare healthy meals for the kids quickly.",
                      },
                      {
                        name: "Hamza H.",
                        rating: 4,
                        text: "The capacity is excellent and cleaning is very easy. Highly recommended.",
                      },
                    ].map((review, i) => (
                      <GridItem key={i} _extra={{ className: "col-span-1" }}>
                        <Box className="p-4 border border-slate-100 dark:border-slate-800 rounded-lg">
                          <VStack space="sm">
                            <HStack space="sm" className="items-center">
                              <Box className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800" />
                              <VStack>
                                <Text size="sm" className="font-bold">
                                  {review.name}
                                </Text>
                                <HStack space="xs">
                                  {[...Array(5)].map((_, starIndex) => (
                                    <Icon
                                      key={starIndex}
                                      as={MdStar}
                                      size="xs"
                                      className={
                                        starIndex < review.rating
                                          ? "text-amber-400"
                                          : "text-slate-200 dark:text-slate-700"
                                      }
                                    />
                                  ))}
                                </HStack>
                              </VStack>
                            </HStack>
                            <Text
                              size="xs"
                              className="text-slate-600 dark:text-slate-400"
                            >
                              {review.text}
                            </Text>
                          </VStack>
                        </Box>
                      </GridItem>
                    ))}
                  </Grid>

                  <Button
                    variant="outline"
                    className="border-dashed border-2 border-slate-200 dark:border-slate-800 mt-2"
                  >
                    <ButtonText className="text-slate-400 font-medium">
                      + Add New Review
                    </ButtonText>
                  </Button>
                </VStack>
              </Card>
            </VStack>
          </GridItem>

          {/* Sidebar Content Area */}
          <GridItem
            _extra={{
              className: "lg:col-span-1",
            }}
          >
            <VStack space="xl">
              {/* Product Media */}
              <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                <VStack space="lg">
                  <HStack space="md" className="items-center">
                    <Icon
                      as={MdImage}
                      className="text-brand-primary"
                      size="lg"
                    />
                    <Heading size="md">Product Media</Heading>
                  </HStack>

                  <Divider className="bg-slate-100 dark:bg-slate-800" />

                  <VStack space="md">
                    <Box className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group">
                      <img
                        alt="IRIS Air Fryer"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6TGisQEyHVFaYXWFvQ8TLvRkCQnPOL9pQZMS-rAKFxW5wTtBDDy_v6J0hIAsnnLNwV1P9iMeE7H74hGTitS5NShd6XQ1NNgd3DaLgyRd6SLt4t_XvtzbTGgvpe5Gop9iOJVa7oIN-hfBgR0rPLSdaNYyGNf4paIRv5DjBNR7rIFOFBTGVx8ALcvbcBjAxIYVk7dpQzJBZBJsjaCi6Czp_C9X3d0S4yoaVZJ26Uc3wZnkzVZzrACSHuQbpd9VjJfE1vwZ-d_wOccNC"
                      />
                      <HStack
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center"
                        space="sm"
                      >
                        <Button
                          size="sm"
                          variant="solid"
                          className="bg-white hover:bg-slate-100 rounded-full w-10 h-10 p-0"
                        >
                          <ButtonIcon
                            as={MdDelete}
                            className="text-slate-800 hover:text-red-500"
                          />
                        </Button>
                        <Button
                          size="sm"
                          variant="solid"
                          className="bg-white hover:bg-slate-100 rounded-full w-10 h-10 p-0"
                        >
                          <ButtonIcon
                            as={MdEdit}
                            className="text-slate-800 hover:text-blue-500"
                          />
                        </Button>
                      </HStack>
                    </Box>

                    <Box className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl p-8 text-center hover:border-brand-primary transition-colors cursor-pointer group">
                      <VStack space="xs" className="items-center">
                        <Icon
                          as={MdCloudUpload}
                          className="text-slate-300 group-hover:text-brand-primary"
                          // Using style for larger custom size to avoid className interop issues
                          style={{ width: 40, height: 40 }}
                        />
                        <Text size="sm" className="text-slate-500">
                          Drag and drop images here
                        </Text>
                        <Text size="2xs" className="text-slate-400 uppercase">
                          PNG, JPG up to 10MB
                        </Text>
                      </VStack>
                    </Box>

                    <Grid
                      _extra={{ className: "grid-cols-4" }}
                      className="gap-2"
                    >
                      {[0, 1, 2].map((i) => (
                        <GridItem
                          key={i}
                          _extra={{
                            className:
                              "aspect-square bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700",
                          }}
                        />
                      ))}
                      <GridItem
                        _extra={{
                          className:
                            "aspect-square bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 border-dashed flex items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700",
                        }}
                      >
                        <Icon as={MdAdd} className="text-slate-300" />
                      </GridItem>
                    </Grid>
                  </VStack>
                </VStack>
              </Card>

              {/* Publish Status */}
              <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                <VStack space="lg">
                  <HStack space="md" className="items-center">
                    <Icon
                      as={MdPublish}
                      className="text-brand-primary"
                      size="lg"
                    />
                    <Heading size="md">Publish Status</Heading>
                  </HStack>

                  <Divider className="bg-slate-100 dark:bg-slate-800" />

                  <VStack space="md">
                    <HStack className="justify-between items-center">
                      <Text size="sm" className="text-slate-600">
                        Status
                      </Text>
                      <Box className="px-2 py-1 bg-amber-50 dark:bg-amber-900/20 rounded">
                        <Text
                          className="text-amber-600 dark:text-amber-400 font-bold uppercase"
                          size="2xs"
                        >
                          Draft
                        </Text>
                      </Box>
                    </HStack>
                    <HStack className="justify-between items-center">
                      <Text size="sm" className="text-slate-600">
                        Visibility
                      </Text>
                      <Text
                        size="sm"
                        className="font-medium text-slate-900 dark:text-white"
                      >
                        Public
                      </Text>
                    </HStack>

                    <Divider className="bg-slate-100 dark:bg-slate-800 mt-2" />

                    <Button className="w-full bg-brand-primary">
                      <ButtonText>Save & Publish Product</ButtonText>
                    </Button>
                  </VStack>
                </VStack>
              </Card>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
