"use client";

import {useLocale} from "next-intl";
import {useRouter} from "next/navigation";
import {locales} from "@/i18n/config";
import {setCookie} from "cookies-next";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();

    const flags = {
        en: "🇺🇸",
        es: "🇪🇸",
    };

    const switchLocale = (newLocale: string) => {
        // Set the locale cookie
        setCookie("locale", newLocale, {
            path: "/",
            maxAge: 60 * 60 * 24 * 365, // 1 year
        });

        // Refresh the page to apply the new locale
        router.refresh();
    };

    return (
        <div className="flex items-center">
            <Select
                value={locale}
                onValueChange={(value) => {
                    if (value !== locale) {
                        switchLocale(value);
                    }
                }}
            >
                <SelectTrigger
                    className="bg-background border-border focus-visible:!ring-0"
                >
                    <SelectValue>
                        <span className="flex items-center gap-2">
                          <span className="text-base">
                            {flags[locale as keyof typeof flags]}
                          </span>
                          <span>{locale.toUpperCase()}</span>
                        </span>
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {locales.map((loc) => (
                        <SelectItem
                            key={loc}
                            value={loc}
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-base">
                              {flags[loc as keyof typeof flags]}
                            </span>
                            <span>{loc.toUpperCase()}</span>
                          </span>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
