import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
    public getArrayItemIndex(itemArray: any[], itemKey: any, value: any) {
        let index: number;
        itemArray.some((item, itemIndex) => {
            if (item[itemKey] == value) {
                index = itemIndex;
                return true;
            }
        });
        return index;
    }

    public deleteArrayItem(itemArray: any[], itemKey: any, value: any) {
        let index: number = this.getArrayItemIndex(itemArray, itemKey, value);
        itemArray.splice(index, 1);
    }

}
