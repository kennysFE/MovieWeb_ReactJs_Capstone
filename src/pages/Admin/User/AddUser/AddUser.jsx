import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from '../../../../App';
import { themNguoiDungAction } from '../../../../store/actions/QuanLyNguoiDungAction';


export default function AddUser() {
  const dispatch = useDispatch()

  const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
  console.log("thongTinNguoiDung: ", thongTinNguoiDung);

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      maNhom: 'GP11',
      maLoaiNguoiDung: 'KhachHang',
      hoTen: '',
    },
    onSubmit: values => {

      const action = themNguoiDungAction(values)
      dispatch(action)
      console.log("values: ", values);

    }
  })
  return (
    <form onSubmit={formik.handleSubmit} className="p-6 dark:bg-gray-800 dark:text-gray-50">
      <div noValidate action className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">

          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="taiKhoan" className="text-sm">Tài khoản</label>
              <input onChange={formik.handleChange} name='taiKhoan' placeholder="Tài khoản" className="mt-2 p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">Email</label>
              <input onChange={formik.handleChange} name='email' placeholder="Email" className="mt-2 p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="matKhau" className="text-sm">Mật khẩu</label>
              <input onChange={formik.handleChange} name='matKhau' placeholder="Email" className="mt-2 p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="soDt" className="text-sm">Số điện thoại</label>
              <input onChange={formik.handleChange} name='soDt' placeholder="Số điện thoại" className="mt-2 p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="hoTen" className="text-sm">Họ tên</label>
              <input onChange={formik.handleChange} name='hoTen' placeholder="Họ tên" className="mt-2 p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">Loại người dùng</label>
              <select onChange={formik.handleChange} name='maLoaiNguoiDung' className="mt-2 p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" >
                <option value='KhachHang'>KhachHang</option>
                <option value='QuanTri'>QuanTri</option>
              </select>
            </div>
          </div>
        </fieldset>
        <div className='flex justify-between' style={{ marginTop: 0 }}>
          <div className='p-6' >
            <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={() => {
              history.push('/admin/user')

            }}>Trở về</button>
          </div>
          <div className='p-6' >
            <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" >Thêm</button>
            <button type="submit" className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Lưu</button>
          </div>
        </div>

      </div>
    </form>

  )
}
