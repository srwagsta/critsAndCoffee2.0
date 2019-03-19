FROM selenium/hub:latest

COPY ./run_tests /run_tests
RUN sed -i 's/\r//' /run_tests
RUN chmod +x /run_tests
