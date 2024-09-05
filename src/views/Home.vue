<script setup lang="ts">
import { ref, type Ref } from 'vue';
import Button from '@/components/ui/Button.vue';
import Input from '@/components/ui/Input.vue';
import { getImageUrl } from '@/utils/images';

interface StorageData {
  counter: number
  table: {
    header: {
      cells: TableHeaderCell[]
    },
    records: TableRecord[]
  },
}

interface TableHeaderCell {
  id: number
  label: string
  sort?: boolean
  description?: string
  enoughInStock?: boolean
  filter?: TableHeaderCellFilter
}

interface TableHeaderCellFilter {
  type: string
  label: string
  defaultValue: number | string
  postfix: string
}

interface TableRecord {
  id: number
  photo?: string
  label: string
  article?: string
  description?: string
  balanceOnWb: number
  balanceOnWbDays: number
  balanceWithTheSupplier: number
  balanceWithTheSupplierDays: number
  balanceInMyWarehouse: number
  balanceInMyWarehouseDays: number
  balanceAll: number
  balanceAllDays: number
  onTheWayFromTheManufacturer: number
  orderSpeed: number
  orderSpeedMonth?: number
  sizeRange?: Array<TableRecord>
}

const data: Ref<StorageData> = ref({
  counter: 134,
  table: {
    header: {
      cells: [
        {
          id: 1,
          label: 'Товар',
        },
        {
          id: 2,
          label: 'Остаток на WB',
          sort: true,
          description: 'Остаток на WB',
          enoughInStock: true
        },
        {
          id: 3,
          label: 'Остаток у поставщика',
          sort: true,
          description: 'Остаток у поставщика',
          enoughInStock: true
        },
        {
          id: 4,
          label: 'Остаток мой склад',
          sort: true,
          description: 'Остаток мой склад',
          enoughInStock: true
        },
        {
          id: 5,
          label: 'Остаток всего',
          sort: true,
          enoughInStock: true
        },
        {
          id: 6,
          label: 'В пути от производителя',
          sort: true,
          description: 'В пути от производителя',
        },
        {
          id: 7,
          label: 'Скорость заказов',
          sort: true,
          description: 'Скорость заказов',
          filter: {
            type: 'number',
            label: 'за',
            defaultValue: 7,
            postfix: 'дней'
          }
        },
        {
          id: 8,
          label: 'История изменения',
        },
      ]
    },
    records: [
      {
        id: 1,
        photo: 'product-1.png',
        label: 'Долговечный букет из 9 роз в коробке, в подарок — вечные стабилизированные цветы',
        article: '9619790',
        description: 'Долговечный букет из 9 роз в коробке, в подарок — вечные стабилизированные цветы',
        balanceOnWb: 55475,
        balanceOnWbDays: 549,
        balanceWithTheSupplier: 1000,
        balanceWithTheSupplierDays: 549,
        balanceInMyWarehouse: 11453,
        balanceInMyWarehouseDays: 549,
        balanceAll: 142412,
        balanceAllDays: 549,
        onTheWayFromTheManufacturer: 453,
        orderSpeed: 5,
        orderSpeedMonth: 150,
        sizeRange: []
      },
      {
        id: 2,
        photo: 'product-1.png',
        label: 'Долговечный букет из 9 роз в коробке, в подарок — вечные стабилизированные цветы',
        article: '9619790',
        description: 'Долговечный букет из 9 роз в коробке, в подарок — вечные стабилизированные цветы',
        balanceOnWb: 55475,
        balanceOnWbDays: 549,
        balanceWithTheSupplier: 1000,
        balanceWithTheSupplierDays: 549,
        balanceInMyWarehouse: 11453,
        balanceInMyWarehouseDays: 549,
        balanceAll: 142412,
        balanceAllDays: 549,
        onTheWayFromTheManufacturer: 453,
        orderSpeed: 5,
        orderSpeedMonth: 150,
        sizeRange: [
          {
            id: 1,
            label: '38',
            balanceOnWb: 41,
            balanceOnWbDays: 2,
            balanceWithTheSupplier: 41,
            balanceWithTheSupplierDays: 2,
            balanceInMyWarehouse: 41,
            balanceInMyWarehouseDays: 2,
            balanceAll: 417,
            balanceAllDays: 13,
            onTheWayFromTheManufacturer: 244,
            orderSpeed: 5,
          },
          {
            id: 2,
            label: '38',
            balanceOnWb: 41,
            balanceOnWbDays: 2,
            balanceWithTheSupplier: 41,
            balanceWithTheSupplierDays: 2,
            balanceInMyWarehouse: 41,
            balanceInMyWarehouseDays: 2,
            balanceAll: 417,
            balanceAllDays: 13,
            onTheWayFromTheManufacturer: 244,
            orderSpeed: 5,
          },
          {
            id: 3,
            label: '38',
            balanceOnWb: 41,
            balanceOnWbDays: 2,
            balanceWithTheSupplier: 41,
            balanceWithTheSupplierDays: 2,
            balanceInMyWarehouse: 41,
            balanceInMyWarehouseDays: 2,
            balanceAll: 417,
            balanceAllDays: 13,
            onTheWayFromTheManufacturer: 244,
            orderSpeed: 5,
          },
          {
            id: 4,
            label: '38',
            balanceOnWb: 41,
            balanceOnWbDays: 2,
            balanceWithTheSupplier: 41,
            balanceWithTheSupplierDays: 2,
            balanceInMyWarehouse: 41,
            balanceInMyWarehouseDays: 2,
            balanceAll: 417,
            balanceAllDays: 13,
            onTheWayFromTheManufacturer: 244,
            orderSpeed: 5,
          },
          {
            id: 5,
            label: '38',
            balanceOnWb: 41,
            balanceOnWbDays: 2,
            balanceWithTheSupplier: 41,
            balanceWithTheSupplierDays: 2,
            balanceInMyWarehouse: 41,
            balanceInMyWarehouseDays: 2,
            balanceAll: 417,
            balanceAllDays: 13,
            onTheWayFromTheManufacturer: 244,
            orderSpeed: 5,
          }
        ]
      },
      {
        id: 3,
        photo: 'product-1.png',
        label: 'Долговечный букет из 9 роз в коробке, в подарок — вечные стабилизированные цветы',
        article: '9619790',
        description: 'Долговечный букет из 9 роз в коробке, в подарок — вечные стабилизированные цветы',
        balanceOnWb: 55475,
        balanceOnWbDays: 549,
        balanceWithTheSupplier: 1000,
        balanceWithTheSupplierDays: 549,
        balanceInMyWarehouse: 11453,
        balanceInMyWarehouseDays: 549,
        balanceAll: 142412,
        balanceAllDays: 549,
        onTheWayFromTheManufacturer: 453,
        orderSpeed: 5,
        orderSpeedMonth: 150,
        sizeRange: [
          {
            id: 1,
            label: '38',
            balanceOnWb: 41,
            balanceOnWbDays: 2,
            balanceWithTheSupplier: 41,
            balanceWithTheSupplierDays: 2,
            balanceInMyWarehouse: 41,
            balanceInMyWarehouseDays: 2,
            balanceAll: 417,
            balanceAllDays: 13,
            onTheWayFromTheManufacturer: 244,
            orderSpeed: 5,
          },
          {
            id: 2,
            label: '38',
            balanceOnWb: 41,
            balanceOnWbDays: 2,
            balanceWithTheSupplier: 41,
            balanceWithTheSupplierDays: 2,
            balanceInMyWarehouse: 41,
            balanceInMyWarehouseDays: 2,
            balanceAll: 417,
            balanceAllDays: 13,
            onTheWayFromTheManufacturer: 244,
            orderSpeed: 5,
          },
          {
            id: 3,
            label: '38',
            balanceOnWb: 41,
            balanceOnWbDays: 2,
            balanceWithTheSupplier: 41,
            balanceWithTheSupplierDays: 2,
            balanceInMyWarehouse: 41,
            balanceInMyWarehouseDays: 2,
            balanceAll: 417,
            balanceAllDays: 13,
            onTheWayFromTheManufacturer: 244,
            orderSpeed: 5,
          },
          {
            id: 4,
            label: '38',
            balanceOnWb: 41,
            balanceOnWbDays: 2,
            balanceWithTheSupplier: 41,
            balanceWithTheSupplierDays: 2,
            balanceInMyWarehouse: 41,
            balanceInMyWarehouseDays: 2,
            balanceAll: 417,
            balanceAllDays: 13,
            onTheWayFromTheManufacturer: 244,
            orderSpeed: 5,
          },
          {
            id: 5,
            label: '38',
            balanceOnWb: 41,
            balanceOnWbDays: 2,
            balanceWithTheSupplier: 41,
            balanceWithTheSupplierDays: 2,
            balanceInMyWarehouse: 41,
            balanceInMyWarehouseDays: 2,
            balanceAll: 417,
            balanceAllDays: 13,
            onTheWayFromTheManufacturer: 244,
            orderSpeed: 5,
          }
        ]
      },
    ]
  }
})

const sortTable = (id: number, enoughInStock: boolean = false) => {
  console.log(`Sort table by id: ${id} and enough in stock: ${enoughInStock}`)
}

const showCellDescription = (description: string) => {
  console.log(`Show cell description: ${description}`)
}

const isVisible = ref<Record<number, boolean>>({});

const toggleSizeRange = (id: number) => {
  isVisible.value[id] = !isVisible.value[id];
};
</script>

<template>
  <div class="storage">
    <div class="storage__header">
      <div class="storage__counter">
        <span class="storage__counter-label">Товары: </span>
        <span class="storage__counter-value">{{ data.counter }} шт.</span>
      </div>
    </div>
    <table class="storage__table">
      <thead class="storage__table-header">
        <tr>
          <th v-for="cell in data.table.header.cells" :key="cell.id" class="storage__table-cell">
            <div class="storage__table-cell-main">
              <span class="storage__table-cell-label">{{ cell.label }}</span>
              <Button v-if="cell.sort" @click="sortTable(cell.id)" class="storage__table-cell-sort" icon="sort" />
              <Button v-if="cell.description" @click="showCellDescription(cell.description)" class="storage__table-cell-description" icon="description" />
            </div>
            <div v-if="cell.enoughInStock" class="storage__table-cell-enough-in-stock">
              Хватит на складе
              <Button @click="sortTable(cell.id, true)" class="storage__table-cell-enough-in-stock-btn" icon="sort" />
            </div>
            <div v-if="cell.filter" class="storage__table-cell-filter">
              <span class="storage__table-cell-filter-label">{{ cell.filter.label }}</span>
              <div class="storage__table-cell-filter-wrapper">
                <Input :type="cell.filter.type" :value="cell.filter.defaultValue" :postfix="cell.filter.postfix" />
              </div>

            </div>
          </th>
        </tr>
      </thead>

      <tbody class="storage__table-body">
        <template v-for="record in data.table.records" :key="record.id">
          <tr style="height: 16px;"></tr>
          <tr class="storage__table-record" :class="{'storage__table-record--with-size-range': record.sizeRange?.length}">
            <td class="storage__table-record-cell storage__table-record-cell--main">
              <img v-if="record.photo" :src="getImageUrl(record.photo, 'products')" alt="" class="storage__table-record-photo">
              <div class="storage__table-record-cell-wrapper">
                <span class="storage__table-record-label">{{ record.label }}</span>
                <span class="storage__table-record-article">Артикул WB: {{ record.article }}</span>
              </div>
              <div class="storage__table-record-actions">
                <Button class="storage__table-record-btn" :to="`/products/${record.id}`" icon="link" />
                <Button class="storage__table-record-btn" icon="info" />
              </div>
            </td>
            <td class="storage__table-record-cell">
              <Input class="storage__table-record-cell-value" type="number" :value="record.balanceOnWb" postfix="шт." />
              <div class="storage__table-record-cell-days">
                Хватит на {{ record.balanceOnWbDays }} дн
              </div>
            </td>
            <td class="storage__table-record-cell">
              <Input class="storage__table-record-cell-value" type="number" :value="record.balanceWithTheSupplier" postfix="шт." />
              <div class="storage__table-record-cell-days">
                Хватит на {{ record.balanceWithTheSupplierDays }} дн
              </div>
            </td>
            <td class="storage__table-record-cell">
              <Input class="storage__table-record-cell-value" type="number" :value="record.balanceInMyWarehouse" postfix="шт." />
              <div class="storage__table-record-cell-days">
                Хватит на {{ record.balanceInMyWarehouseDays }} дн
              </div>
            </td>
            <td class="storage__table-record-cell">
              <Input class="storage__table-record-cell-value" type="number" :value="record.balanceAll" postfix="шт." />
              <div class="storage__table-record-cell-days">
                Хватит на {{ record.balanceAllDays }} дн
              </div>
            </td>
            <td class="storage__table-record-cell">
              <Input class="storage__table-record-cell-value" type="number" :value="record.onTheWayFromTheManufacturer" postfix="шт." />
            </td>
            <td class="storage__table-record-cell">
              <Input class="storage__table-record-cell-value" type="number" :value="record.orderSpeed" postfix="шт. / день" />
              <div class="storage__table-record-cell-value-month">{{ record.orderSpeedMonth }} шт. / 30 дней</div>
            </td>
            <td class="storage__table-record-cell">
              <Button v-if="!record.sizeRange?.length" :to="`/history/${record.id}`" label="Посмотреть" bgColor="main" />
            </td>
          </tr>
          <tr v-if="record.sizeRange?.length" class="storage__table-size-range">
            <td class="storage__table-size-range-wrapper" colspan="100%">
              <Button 
                @click="toggleSizeRange(record.id)" 
                class="storage__table-size-range-toggle" 
                label="Размерный ряд" 
                icon="arrow" 
                :iconRight="true" 
                :iconRotate="isVisible[record.id]" 
              />
              <transition name="fade">
                <div v-if="isVisible[record.id]" class="storage__size-range-table">
                  <div class="storage__size-range-table-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                      <path d="M23.25 10.4443H18.6V5.94427C18.6 4.29427 17.55 2.79427 15.75 1.59427C12.3 -0.505729 6.9 -0.505729 3.3 1.44427C1.5 2.34427 0.3 3.69427 0 5.19427C0 5.64427 0 8.49427 0 12.9943C0 14.3443 0.9 15.5443 2.55 16.4443C3.45 16.8943 4.5 17.3443 5.55 17.3443H23.1C23.55 17.3443 23.85 17.0443 23.85 16.5943V11.1943C24 10.7443 23.7 10.4443 23.25 10.4443ZM17.25 10.4443H15.45C16.2 10.1443 16.8 9.69427 17.25 9.09427V10.4443ZM1.5 5.49427C1.95 3.24427 5.4 1.44427 9.45 1.44427C11.7 1.44427 13.65 1.89427 15.15 2.94427C18 4.74427 18 7.44427 15.15 9.09427C12.9 10.4443 9.6 10.7443 6.9 10.2943C3.75 9.69427 1.35 7.89427 1.35 5.94427C1.35 5.79427 1.35 5.64427 1.5 5.49427ZM22.65 16.1443H19.5V14.9443C19.5 14.4943 19.2 14.1943 18.75 14.1943C18.3 14.1943 18 14.4943 18 14.9443V16.1443H15.6V14.9443C15.6 14.4943 15.3 14.1943 14.85 14.1943C14.4 14.1943 14.1 14.4943 14.1 14.9443V16.1443H11.7V14.9443C11.7 14.4943 11.4 14.1943 10.95 14.1943C10.8 14.1943 10.5 14.4943 10.5 14.9443V16.1443H8.1V14.9443C8.1 14.4943 7.8 14.1943 7.35 14.1943C6.9 14.1943 6.6 14.4943 6.6 14.9443V16.1443H5.55C4.65 15.9943 3.75 15.8443 3 15.3943C1.8 14.7943 1.05 13.8943 1.05 13.1443V9.09427C1.2 9.24427 1.8 9.69427 1.8 9.69427C4.2 11.1943 6.9 11.9443 9.45 11.9443H22.65V16.1443Z" fill="#5068A5"/>
                      <path d="M8.4 8.49426C10.65 8.79426 13.05 7.74426 13.05 5.94426C13.05 4.44426 11.4 3.39426 9.3 3.39426C7.5 3.39426 6 4.29426 5.7 5.64426C5.7 5.79426 5.7 5.94426 5.7 5.94426C5.7 7.14426 6.75 8.04426 8.4 8.49426ZM7.05 5.79426C7.2 5.34426 8.1 4.74426 9.3 4.74426C10.65 4.74426 11.55 5.34426 11.55 5.94426C11.55 6.69426 10.05 7.29426 8.55 6.99426C7.8 6.84426 7.05 6.39426 7.05 5.79426C7.05 5.94426 7.05 5.94426 7.05 5.79426Z" fill="#5068A5"/>
                    </svg>
                    <span>Размерный ряд</span>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>Размер</th>
                        <th>Остаток на WB</th>
                        <th>Хватит на</th>
                        <th>Остаток у поставщика</th>
                        <th>Хватит на</th>
                        <th>Остаток мой склад</th>
                        <th>Хватит на</th>
                        <th>Остаток всего</th>
                        <th>Хватит на</th>
                        <th>В пути от производителя</th>
                        <th>Скорость заказов</th>
                        <th>История изменений</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="size in record.sizeRange" :key="size.id">
                        <td>
                          <span class="storage__size-range-table-size">{{ size.label }}</span>
                        </td>
                        <td>{{ size.balanceOnWb }} шт.</td>
                        <td>{{ size.balanceOnWbDays }} дн</td>
                        <td>{{ size.balanceWithTheSupplier }} шт.</td>
                        <td>{{ size.balanceWithTheSupplierDays }} дн</td>
                        <td>{{ size.balanceInMyWarehouse }} шт.</td>
                        <td>{{ size.balanceInMyWarehouseDays }} дн</td>
                        <td>{{ size.balanceAll }} шт.</td>
                        <td>{{ size.balanceAllDays }} дн</td>
                        <td>{{ size.onTheWayFromTheManufacturer }} шт.</td>
                        <td>{{ size.orderSpeed }} шт. / день</td>
                        <td>
                          <Button :to="`/history/${record.id}/size/${size.label}`" label="Посмотреть" bgColor="main" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </transition>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.storage {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;

  &__counter-value {
    color: var(--color-primary);
  }

  &__table {
    margin-top: 24px;
    width: 100%;
    border-collapse: collapse;
  }

  &__table-header {
    color: var(--vt-c-white);
    font-size: 13px;
    line-height: 18px;
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--color-main);
      border-radius: 4px;
    }
  }

  &__table-cell {
    padding: 8px;
    text-align: left;
    position: relative;
    z-index: 1;

    &:first-child {
      width: 100%;
      padding-left: 20px;
    }
    &:last-child {
      max-width: 100px;
    }
  }

  &__table-cell-main {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__table-cell-label {
    width: max-content;
    max-width: 140px;
  }

  &__table-cell-enough-in-stock {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 2px;
    white-space: nowrap;
  }

  &__table-cell-filter {
    display: flex;
    gap: 4px;
  }

  &__table-cell-filter-wrapper {
    border-radius: 4px;
    background: var(--black-FFFFFF, #FFF);
    padding: 0 4px 2px;
  }

  &__table-record {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid var(--blue-D8DCE9, #D8DCE9);
      pointer-events: none;
    }

    &--with-size-range {
      &::after {
        border-radius: 4px 4px 0 0;
        border-bottom: unset;
      }

      .storage__table-record-cell {
        padding: 20px 20px 12px 0;

        &:first-child {
          padding: 20px 20px 12px 20px;
        }
      }
    }
  }

  &__table-record-cell {
    padding: 20px 20px 20px 0;

    &:first-child {
      padding: 20px;
    }

    &--main {
      display: flex;
      gap: 7px;
    }
  }

  &__table-record-photo {
    height: fit-content;
    width: 35px;
    flex-shrink: 0;
  }

  &__table-record-cell-wrapper {
    display: flex;
    flex-direction: column;
  }

  &__table-record-label {
    color: var(--color-main);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    font-size: 13px;
    line-height: 18px;
  }

  &__table-record-article {
    color: var(--black-666666, #666);
    font-size: 12px;
    line-height: 16px;
    margin-top: 4px;
  }

  &__table-record-actions {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__table-record-cell-value {
    font-size: 14px;
    line-height: 20px;
  }

  &__table-record-cell-days {
    padding: 5px 16px;
    border-radius: 4px;
    background: var(--F8F8F8, #F8F8F8);
    color: var(--black-666666, #666);
    font-size: 12px;
    line-height: 16px;
    margin-top: 5px;
    white-space: nowrap;
    width: fit-content;
  }

  &__table-record-cell-value-month {
    font-size: 14px;
    line-height: 20px;
  }

  &__table-size-range-wrapper {
    padding: 0 20px 20px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0 0 4px 4px;
      border: 1px solid var(--blue-D8DCE9, #D8DCE9);
      border-top: unset;
      pointer-events: none;
    }
  }

  &__table-size-range-toggle {
    padding: 0;
    color: var(--color-main);
    font-size: 14px;
    line-height: 20px;
    border-bottom: 1px dotted var(--color-blue-light);
    border-radius: unset;

    &:hover {
      border-color: var(--color-primary);
    }
  }

  &__size-range-table-header {
    padding: 12px 18px;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__size-range-table {
    padding: 0 16px 16px 16px;
    margin-top: 12px;
    width: 100%;
    position: relative;
    border-left: 4px solid var(--Additional-color-A5D274, #A5D274);
    text-align: left;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border-radius: 4px;
      background: var(--F8F8F8, #F8F8F8);
    }

    * {
      position: relative;
      z-index: 1;
    }

    thead {
      color: var(--black-999999, #999);
      font-size: 12px;
      line-height: 16px;

      th {
        padding: 16px;
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid var(--black-EBEBEB, #EBEBEB);
        background: #FFF;

        td {
          padding: 16px;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }

  &__size-range-table-size {
    background-color: var(--color-primary);
    color: var(--black-FFFFFF, #FFF);
    text-align: center;
    font-size: 13px;
    line-height: 20px;
    display: block;
    border-radius: 4px;
    padding: 2px 12px;
    min-width: 72px;
  }
}
</style>
