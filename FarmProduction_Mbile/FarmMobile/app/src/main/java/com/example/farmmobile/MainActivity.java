package com.example.farmmobile;
import android.content.Context;
import android.net.http.SslError;
import android.os.Bundle;
import android.view.Display;
import android.view.WindowManager;
import android.webkit.SslErrorHandler;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.webView);
        webView.getSettings().setBuiltInZoomControls(true);
        webView.getSettings().setDisplayZoomControls(false);
        webView.getSettings().setAllowFileAccess(true);
        webView.setInitialScale(1);
        webView.getSettings().setLoadWithOverviewMode(true);
        webView.getSettings().setUseWideViewPort(true);
        webView.setVerticalScrollBarEnabled(true);
        webView.setHorizontalScrollBarEnabled(true);
        webView.getSettings().setJavaScriptEnabled(true);

        Display display = ((WindowManager) getSystemService(Context.WINDOW_SERVICE)).getDefaultDisplay();
        int width = display.getWidth();
        webView.setInitialScale((int) (width / getResources().getDisplayMetrics().density) / 100);

        WebView.setWebContentsDebuggingEnabled(true);

        // Cho phép chạy JavaScript (nếu cần)
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true); // Cho phép chạy JavaScript (nếu cần)
        webSettings.setDomStorageEnabled(true); // Cho phép lưu trữ địa phương (nếu cần)

        // Thiết lập WebViewClient để xử lý sự kiện SSL
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
                // Xác nhận chứng chỉ SSL ở đây (có thể cho phép hoặc từ chối)
                handler.proceed(); // Cho phép truy cập trang web mặc dù lỗi SSL
            }
        });

        // Load trang web không sử dụng SSL
        webView.loadUrl("http://192.168.1.70/");
    }
}
