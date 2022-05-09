
// YOU ARE IN VIRTUAL-ASSISTANT/MODELS

// This file is a copy of the business-assistant.model.ts file, located in app > models.

export interface Category {
    title: string;
    subcategory: Subcategory[];
}

interface Subcategory{
    title: string;
    items: Items[];
}

interface Items{
    item: string;
}