'use client'

import { InputLabel } from "@/app/_components/field/field";
import SystemImage from "@/app/_components/img";
import { LabelOrderStatus } from "@/app/_components/label";
import SystemLink from "@/app/_components/link";
import { DATA_PRODUCTS } from "@/domain/data-demo";
import {
  OrderStatusEnums,
  StatusOrderType,
  ProductType,
  TableDataType
} from "@/domain/type";

import { UseAddressVN } from "@/hooks/ullity-hook";
import {
  coverEntityToColumnType,
  translateCodeStatusToTitle
} from "@/presentation/cover-data";
import {
  formaaterNumber,
  getPriceWithCurrency
} from "@/presentation/product-controller";
import { DATE_FORMAT_VI } from "@/ultil/const";
import {
  compareStringVietnamese,
  dayFormatDateTime,
  toTitleCase
} from "@/ultil/helper";
import { ROUTERS } from "@/ultil/router";
import { notifySuccess } from "@/ultil/toast";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined
} from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Dropdown,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Select,
  Table
} from "antd";
import { ColumnProps } from "antd/es/table";
import dayjs from "dayjs";
import { DefaultOptionType } from "rc-select/es/Select";
import {
  ReactNode,
  useState
} from "react";

type BoxOrderInfoProps = {
  classname?: string
}

export const BoxOrderInfo = (props: BoxOrderInfoProps) => {
  return <div className={`${props?.classname ?? ''} dashboard-box`}>
    <h4 className={'dashboard-box-title'}>Order info (Full UI)</h4>
    <BoxOrderCreateInfo classname={'mt-[12px]'}/>
    <BoxOrderInfoPayment classname={'mt-[28px]'}/>
    <BoxOrderInfoShip classname={'mt-[28px] border-t border-solid border-border-low pt-[24px]'}/>
  </div>
}

type BoxOrderInfoPaymentProps = {
  classname?: string
}

export const BoxOrderInfoPayment = (props: BoxOrderInfoPaymentProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const {
          provinceCurrent,
          provinceList,
          districtCurrent,
          districtList,
          wardCurrent,
          wardList,
          handleChangeProvinces,
          handleChangeDistrict,
          handleChangeWard,
          getIndexWard,
          getIndexDistrict,
          getIndexProvince
        } = UseAddressVN();

  console.count(`rebuild ${provinceCurrent?.name}`)

  console.log(provinceCurrent?.name, districtCurrent?.name, wardCurrent?.name)

  return <div className={`${props?.classname ?? ''}`}>
    <div className={'flex gap-3 items-center'}>
      <h4 className={'dashboard-box-title text-primary flex-1'}>Payment info</h4>
      <Button
        icon={isEdit ? <CloseOutlined/> : <EditOutlined/>}
        variant={'filled'}
        shape={'circle'}
        color={'default'}
        onClick={() => setIsEdit(!isEdit)}
      />
    </div>
    <div className={'grid gap-[15px] mt-[20px]'}>
      <PaymentItem
        label={'Full Name:'}
        value={'Don Flowers'}
        classname={'!border-0 !pt-0'}
        isShowField={isEdit}
        field={<Input/>}
      />
      <PaymentItem
        label={'Phone:'}
        value={'0931700099'}
        isShowField={isEdit}
        field={<InputNumber
          className={'!w-full'}
          controls={false}
        />}
      />
      <PaymentItem
        label={'Email :'}
        value={<span className={'break-words'}>DonIFlowers@jourrapide.com</span>}
        isShowField={isEdit}
        field={<Input type={'email'}/>}
      />
      <PaymentItem
        label={'Address detail'}
        value={'18a tran hung dau'}
        isShowField={isEdit}
        field={<Input/>}
      />
      <PaymentItem
        label={'Province'}
        value={provinceCurrent?.name ?? 'Hồ Chí Minh'}
        isShowField={isEdit}
        field={<Select
          showSearch={true}
          value={provinceCurrent?.name ?? ''}
          options={provinceList?.map((item) => {
            return {
              value: item.matt,
              label: item.name
            }
          })}
          filterOption={(input, options) => {
            return compareStringVietnamese(options?.label ?? '', input)
          }}
          onSelect={(value: string) => {
            const index = getIndexProvince(value)

            if(index !== null) {
              handleChangeProvinces(index)
            }
          }}
        />}
      />
      <PaymentItem
        label={'District'}
        value={'Quận 12'}
        isShowField={isEdit}
        field={<Select
          showSearch={true}
          value={districtCurrent?.name ?? ''}
          options={districtList?.map((item) => {
            return {
              value: item.maqh,
              label: item.name
            }
          })}
          filterOption={(input, options) => {
            return compareStringVietnamese(options?.label ?? '', input)
          }}
          onSelect={(value: string) => {
            const index = getIndexDistrict(value);

            if(index !== null) {
              handleChangeDistrict(index);
            }
          }}
        />}
      />
      <PaymentItem
        label={'Ward'}
        value={'Phường Hiệp Thành'}
        isShowField={isEdit}
        field={<Select
          showSearch={true}
          value={wardCurrent?.name ?? ''}
          options={wardList?.map((item) => {
            return {
              value: item.mapx,
              label: item.name
            }
          })}
          filterOption={(input, options) => {
            return compareStringVietnamese(options?.label ?? '', input)
          }}
          onSelect={(value: string) => {
            const index = getIndexWard(value);

            if(index !== null) {
              handleChangeWard(index);
            }
          }}
        />}
      />
    </div>
  </div>
}
type BoxOrderInfoShipProps = {
  classname?: string
}

export const BoxOrderInfoShip = (props: BoxOrderInfoShipProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const {
          provinceCurrent,
          provinceList,
          districtCurrent,
          districtList,
          wardCurrent,
          wardList,
          handleChangeProvinces,
          handleChangeDistrict,
          handleChangeWard,
          getIndexWard,
          getIndexDistrict,
          getIndexProvince
        } = UseAddressVN();


  return <div className={`${props?.classname ?? ''}`}>
    <div className={'flex gap-3 items-center'}>
      <h4 className={'dashboard-box-title text-primary flex-1'}>Ship info</h4>
      <Button
        icon={isEdit ? <CloseOutlined/> : <EditOutlined/>}
        variant={'filled'}
        shape={'circle'}
        color={'default'}
        onClick={() => setIsEdit(!isEdit)}
      />
    </div>
    <div className={'grid gap-[15px] mt-[20px]'}>
      <PaymentItem
        label={'Province'}
        value={provinceCurrent?.name ?? 'Hồ Chí Minh'}
        isShowField={isEdit}
        field={<Select
          showSearch={true}
          value={provinceCurrent?.name ?? ''}
          options={provinceList?.map((item) => {
            return {
              value: item.matt,
              label: item.name
            }
          })}
          filterOption={(input, options) => {
            return compareStringVietnamese(options?.label ?? '', input)
          }}
          onSelect={(value: string) => {
            const index = getIndexProvince(value)

            if(index !== null) {
              handleChangeProvinces(index)
            }
          }}
        />}
      />
      <PaymentItem
        label={'District'}
        value={'Quận 12'}
        isShowField={isEdit}
        field={<Select
          showSearch={true}
          value={districtCurrent?.name ?? ''}
          options={districtList?.map((item) => {
            return {
              value: item.maqh,
              label: item.name
            }
          })}
          filterOption={(input, options) => {
            return compareStringVietnamese(options?.label ?? '', input)
          }}
          onSelect={(value: string) => {
            const index = getIndexDistrict(value);

            if(index !== null) {
              handleChangeDistrict(index);
            }
          }}
        />}
      />
      <PaymentItem
        label={'Ward'}
        value={'Phường Hiệp Thành'}
        isShowField={isEdit}
        field={<Select
          showSearch={true}
          value={wardCurrent?.name ?? ''}
          options={wardList?.map((item) => {
            return {
              value: item.mapx,
              label: item.name
            }
          })}
          filterOption={(input, options) => {
            return compareStringVietnamese(options?.label ?? '', input)
          }}
          onSelect={(value: string) => {
            const index = getIndexWard(value);

            if(index !== null) {
              handleChangeWard(index);
            }
          }}
        />}
      />
    </div>
  </div>
}

type PaymentItemProps = {
  classname?: string
  label: string
  value?: string | ReactNode
  field?: ReactNode
  isShowField?: boolean
}

const PaymentItem = (props: PaymentItemProps) => {
  return <div className={`${props?.classname ?? ''} text-[14px] grid gap-[10px] ${props?.isShowField ? 'sm:grid-cols-[120px_1fr]' : 'grid-cols-[120px_1fr]'} `}>
    <div className={''}>{props.label}</div>
    {!props.isShowField ? <div className={'text-sub text-right overflow-hidden'}>{props?.value}</div> : props.field}
  </div>
}

type BoxOrderCreateInfoProps = {
  classname?: string
}

export const BoxOrderCreateInfo = (props: BoxOrderCreateInfoProps) => {
  const optionsStatus = OrderStatusEnums.map((item) => {
    return {
      value: item,
      label: toTitleCase(translateCodeStatusToTitle(item)),
    }
  })

  const optionsUser = [
    {
      value: '1',
      label: 'Nguyen Van A'
    },
    {
      value: '2',
      label: 'Nguyen Van B'
    },
    {
      value: '3',
      label: 'Nguyen Van C'
    },
    {
      value: '4',
      label: 'Nguyen Van D'
    },
  ]

  return <div className={`${props?.classname ?? ''} grid gap-[20px]`}>
    <div>
      <InputLabel
        title={'Created at'}
        classname={'block w-full'}
      />
      <DatePicker
        defaultValue={dayjs()}
        showTime={true}
        format={{
          format: `${DATE_FORMAT_VI} HH:mm`,
          type: 'mask',
        }}
      />
    </div>
    <div>
      <InputLabel
        title={'Status order'}
        classname={'block w-full'}
      />
      <Select<StatusOrderType>
        defaultValue={'pending'}
        options={optionsStatus}
        className={'w-full'}
      />
    </div>
    <div>
      <InputLabel
        title={'User'}
        classname={'block w-full'}
      />
      <Select<StatusOrderType>
        showSearch={true}
        options={optionsUser}
        className={'w-full'}
        placeholder={'Search...'}
        optionFilterProp={'label'}
      />
    </div>
  </div>
}

type BoxOrderActionProps = {
  classname?: string
}

export const BoxOrderAction = (props: BoxOrderActionProps) => {
  const optionsStatus = OrderStatusEnums.map((item) => {
    return {
      key: item,
      label: toTitleCase(translateCodeStatusToTitle(item)),
    }
  })

  return <div className={`${props?.classname ?? ''} dashboard-box`}>
    <h4 className={'dashboard-box-title'}>Actions</h4>
    <div className={'mt-[14px] grid gap-[15px] text-size-small'}>
      <div className={'grid grid-cols-[100px_1fr] gap-[10px]'}>
        <span className={' text-sub'}>Code</span>
        <span>41250-685</span>
      </div>
      <div className={'grid grid-cols-[100px_1fr] gap-[10px]'}>
        <span className={' text-sub'}>Created</span>
        <span>{dayFormatDateTime(dayjs().toString())}</span>
      </div>
      <div className={'grid grid-cols-[100px_1fr] gap-[10px]'}>
        <span className={' text-sub'}>Trạng thái</span>
        <span>
          <Dropdown
            trigger={['click']}
            menu={{
              items: optionsStatus
            }}
          >
            <div className={'relative cursor-pointer'}>
            <LabelOrderStatus
              icon={<EditOutlined/>}
              label={'pending'}
              size={'large'}
            />
            </div>
          </Dropdown>

        </span>
      </div>
    </div>
    <div className={'flex flex-wrap gap-[12px] mt-[24px]'}>
      <Button
        icon={<CheckOutlined/>}
        variant={'filled'}
        color={'primary'}
      >Save</Button>
      <Button
        icon={<DeleteOutlined/>}
        variant={'filled'}
        color={'danger'}
      >Move to trash</Button>
    </div>


  </div>
}

type BoxOrderAddItemProps = {
  classname?: string
}

export const BoxOrderAddItem = (props: BoxOrderAddItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    notifySuccess('Item saved successfully');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return <div className={`${props?.classname ?? ''} dashboard-box`}>
    <div className={'flex items-center  gap-[12px]'}>
      <h4 className={'dashboard-box-title flex-1'}>Products in Order</h4>
      <Button
        icon={<PlusOutlined/>}
        variant={'filled'}
        color={'default'}
        onClick={showModal}
      >Add item</Button>
    </div>
    <TableOrderItems classname={'mt-[20px] '}/>
    <ModelModifyOrderItem
      isModalOpen={isModalOpen}
      handleCancel={handleCancel}
      handleOk={handleOk}
      isCreate={true}
    />

  </div>
}

type TableOrderItemsProps = {
  classname?: string
}

export const TableOrderItems = (props: TableOrderItemsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    notifySuccess('Item saved successfully');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const column: ColumnProps<TableDataType<ProductType>>[] = [
    {
      title: 'Item',
      key: 'Item',
      render: (_, item, index) => {
        return <div className={'text-size-small text-sub flex gap-[12px]'}>
          <div className={'relative z-1 w-[45px] min-w-[45px]'}>
            <SystemImage
              src={`/asset/dashboard/product-${index + 1}.png`}
              alt={item.title}
              radius={5}
              ratio={100}
            />
          </div>
          <div>
            <SystemLink
              url={ROUTERS.orderDetail}
              className={'mb-0 text-title line-clamp-2 hover:text-primary'}
            >{toTitleCase(item.title)}</SystemLink>
            <p className={'mb-0'}>{item.code}</p>
          </div>
        </div>
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (price) => <div className={'text-nowrap text-right'}>{getPriceWithCurrency(price)}</div>
    },
    {
      title: 'Quantity',
      dataIndex: 'price',
      className: 'text-right',
      render: (price, item, index) => index + 1
    },
    {
      title: 'Total',
      dataIndex: 'price',
      render: (price, item, index) =>
        <div className={'text-nowrap text-right'}>{getPriceWithCurrency(price * (index + 1))}</div>
    },
    {
      title: '',
      render: () => <div className={'flex items-center gap-[10px]'}>
        <Button
          icon={<EditOutlined/>}
          shape={'circle'}
          variant={'filled'}
          color={'blue'}
          size={'small'}
          onClick={showModal}
        />
        <Popconfirm
          title={'Delete the post'}
          description={'Are you sure to delete this task?'}
        >
          <Button
            icon={<DeleteOutlined/>}
            shape={'circle'}
            variant={'filled'}
            color={'danger'}
            size={'small'}
          />
        </Popconfirm>
      </div>
    },
  ]

  const data = coverEntityToColumnType(DATA_PRODUCTS.slice(0, 5))

  return <div className={`${props?.classname ?? ''}`}>
    <Table<TableDataType<ProductType>>
      columns={column}
      dataSource={data}
      pagination={false}
      scroll={{x: true}}
    />
    <ModelModifyOrderItem
      isModalOpen={isModalOpen}
      handleCancel={handleCancel}
      handleOk={handleOk}
      isCreate={false}
    />
  </div>
}

type ModelModifyOrderItemProps = {
  classname?: string
  isCreate?: boolean
  isModalOpen: boolean, handleCancel: () => void, handleOk: () => void
}

export const ModelModifyOrderItem = (props: ModelModifyOrderItemProps) => {
  const product = DATA_PRODUCTS[2]

  const options: DefaultOptionType[] = DATA_PRODUCTS.map((item) => {
    return {
      label: item.title,
      value: item.code,
    }
  })

  return <Modal
    className={`${props?.classname ?? ''}`}
    destroyOnClose={true}
    title={props?.isCreate ? 'Add item' : 'Update item'}
    open={props.isModalOpen}
    onOk={props.handleOk}
    onCancel={props.handleCancel}
    footer={[
      <Button
        key="back"
        onClick={props.handleCancel}
      >
        Huỷ
      </Button>,
      <Button
        key="submit"
        type="primary"
        onClick={props.handleOk}
      >
        Thêm vào
      </Button>,
    ]}
  >
    <div className={'mt-[20px]'}>
      {props?.isCreate && <div className={'mb-[20px]'}>
        <Select
          showSearch
          placeholder={'Search product by name...'}
          onSearch={() => {
          }}
          optionFilterProp={'label'}
          options={options}
          allowClear={true}
          size={'large'}
          className={'w-full'}
        />
      </div>}

      {/* title */}
      <div className={'flex gap-[14px]'}>
        <div className={'relative z-1 w-[45px] min-w-[45px]'}>
          <SystemImage
            src={`/asset/dashboard/product-1.png`}
            alt={product.title}
            radius={5}
            ratio={100}
          />
        </div>
        <span className={' font-[500] line-clamp-2'}>{toTitleCase(product.title)}</span>
      </div>

      {/* price  */}
      <div className={'grid grid-cols-[100px_1fr] gap-[20px] mt-[15px]'}>
        <span>Giá</span>
        <span>{getPriceWithCurrency(product.price ?? 0)}</span>
      </div>
      <div className={'grid grid-cols-[100px_1fr] gap-[20px] mt-[15px]'}>
        <span>Số lượng</span>
        <span>
          <InputNumber
            defaultValue={1}
            min={1}
            formatter={(value) => formaaterNumber(value ?? 0)}
          />
        </span>
      </div>
      <div className={'grid grid-cols-[100px_1fr] gap-[20px] mt-[15px]'}>
        <span>Tổng giá</span>
        <span>{getPriceWithCurrency(product.price ?? 0)}</span>
      </div>
    </div>
  </Modal>
}

type BoxOrderSummaryPriceProps = {
  classname?: string
}

export const BoxOrderSummaryPrice = (props: BoxOrderSummaryPriceProps) => {
  return <div className={`${props?.classname ?? ''} dashboard-box`}>
    <h4 className={'dashboard-box-title'}>Order Summary</h4>
    <div className={'text-size-small  grid gap-[15px] mt-[15px]'}>
      {/* meta */}
      <div className={'grid grid-cols-[120px_1fr] gap-[10px]'}>
        <span>Items subtotal:</span>
        <span className={'text-right '}>{getPriceWithCurrency(1000000)}</span>
      </div>
      {/* meta */}
      <div className={'grid grid-cols-[120px_1fr] gap-[10px]'}>
        <span>Discount:</span>
        <span className={'text-right text-alert'}>{getPriceWithCurrency(-100000)}</span>
      </div>
      {/* meta */}
      <div className={'grid grid-cols-[120px_1fr] gap-[10px]'}>
        <span>Tax:</span>
        <span className={'text-right '}>{getPriceWithCurrency(100000)}</span>
      </div>
      {/* meta */}
      <div className={'grid grid-cols-[120px_1fr] gap-[10px]'}>
        <span>Subtotal::</span>
        <span className={'text-right '}>{getPriceWithCurrency(1000000)}</span>
      </div>
      {/* meta */}
      <div className={'grid grid-cols-[120px_1fr] gap-[10px]'}>
        <span>Shipping cost:</span>
        <span className={'text-right '}>{getPriceWithCurrency(50000)}</span>
      </div>
      {/* meta */}
      <div className={'grid grid-cols-[120px_1fr] gap-[10px] border-t border-dashed border-border-low pt-[15px] text-size-2 font-[500]'}>
        <span>Total:</span>
        <span className={'text-right '}>{getPriceWithCurrency(1050000)}</span>
      </div>
    </div>
  </div>
}