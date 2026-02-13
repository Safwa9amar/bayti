"use client";

import { ReactNode } from "react";
import { MdSearch } from "react-icons/md";

// Gluestack UI components
import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Input, InputField, InputSlot } from "@/components/ui/input";
import { Icon } from "@/components/ui/icon";

interface AdminHeaderProps {
  title: string;
  actions?: ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  showSearch?: boolean;
}

export function AdminHeader({
  title,
  actions,
  breadcrumbs,
  showSearch = true,
}: AdminHeaderProps) {
  return (
    <Box className="h-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 flex-row items-center justify-between sticky top-0 z-10">
      <VStack space="xs">
        <Heading
          size="2xl"
          className="font-bold tracking-tight text-slate-800 dark:text-white"
        >
          {title}
        </Heading>
        {breadcrumbs && (
          <HStack className="items-center" space="xs">
            {breadcrumbs.map((crumb, index) => (
              <HStack key={index} className="items-center">
                {index > 0 && (
                  <Text size="xs" className="mx-2 opacity-30 text-slate-400">
                    /
                  </Text>
                )}
                {crumb.href ? (
                  <a href={crumb.href}>
                    <Text
                      size="xs"
                      className="uppercase tracking-wider text-slate-400 font-semibold hover:text-brand-primary transition-colors"
                    >
                      {crumb.label}
                    </Text>
                  </a>
                ) : (
                  <Text
                    size="xs"
                    className="uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold"
                  >
                    {crumb.label}
                  </Text>
                )}
              </HStack>
            ))}
          </HStack>
        )}
      </VStack>

      <HStack className="items-center" space="lg">
        {showSearch && (
          <Input className="w-72 border-none bg-slate-100 dark:bg-slate-800 rounded-lg">
            <InputSlot className="pl-3">
              <Icon as={MdSearch} className="text-slate-400" size="lg" />
            </InputSlot>
            <InputField
              placeholder="Search products..."
              className="text-sm dark:text-white placeholder:text-slate-500"
            />
          </Input>
        )}
        {actions}
      </HStack>
    </Box>
  );
}
