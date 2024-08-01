# Sử dụng image chính thức Python từ Docker Hub
FROM python:3.9-slim

# Thiết lập biến môi trường
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Đặt thư mục làm việc trong container
WORKDIR /code

# Sao chép tệp requirements và cài đặt dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN pip install gunicorn    # Cài đặt Gunicorn

# Sao chép mã nguồn của ứng dụng vào thư mục làm việc
COPY . /code/

# Thu thập các tệp static
RUN python manage.py collectstatic --noinput

# Mở cổng
EXPOSE 8000

# Chạy lệnh để khởi động ứng dụng với Gunicorn server
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "vanlang_pulse.wsgi:application"]

# Run the command to start the application
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
