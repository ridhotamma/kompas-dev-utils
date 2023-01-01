import Swal from 'sweetalert2'

export default ({ app }, inject) => {
  const handleAlert = ({ type, message, time }) => {
    if (!type) type = 'success'
    if (!message) message = 'Try to override this message'
    if (!time) time = 3000

    switch (type.toLowerCase()) {
      case 'success':
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: message,
          showConfirmButton: false,
          timer: time,
          toast: true,
        })
        break
      case 'error':
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: message,
          showConfirmButton: false,
          timer: time,
          toast: true,
        })
        break
      case 'info':
        Swal.fire({
          position: 'top-end',
          icon: 'info',
          title: message,
          showConfirmButton: false,
          timer: time,
          toast: true,
        })
        break
      default:
        Swal.fire({
          position: 'top-end',
          icon: 'info',
          title: message,
          showConfirmButton: false,
          timer: time,
          toast: true,
        })
    }
  }

  inject('alert', handleAlert, { app })
}
