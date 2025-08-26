'use client';

import {useLocale} from 'next-intl';
import {useRouter} from 'next/navigation';
import {locales} from '@/i18n/config';
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {GlobeIcon} from "lucide-react";
import {setCookie} from 'cookies-next';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();

    const switchLocale = (newLocale: string) => {
        // Set the locale cookie
        setCookie('locale', newLocale, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365, // 1 year
        });

        // Refresh the page to apply the new locale
        router.refresh();
    };

    return (
        <div className="flex items-center gap-3">
            <span className="text-xl text-primary"><GlobeIcon/></span>
            <ToggleGroup
                type="single"
                value={locale}
                onValueChange={(val) => {
                    if (val && val !== locale) {
                        switchLocale(val);
                    }
                }}
                variant="outline"
                size="sm"
                className="bg-white shadow rounded-md border border-gray-200"
            >
                {locales.map((loc) => (
                    <ToggleGroupItem
                        key={loc}
                        value={loc}
                        aria-label={loc}
                        className={
                            locale === loc
                                ? "bg-primary text-primary-foreground font-bold scale-105 transition-all"
                                : "bg-gray-100 text-gray-700 hover:bg-primary/10 transition-all"
                        }
                    >
                        {loc.toUpperCase()}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>
        </div>
    );
}
