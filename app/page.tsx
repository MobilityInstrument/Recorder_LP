'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BASE_PATH } from './config';

// App Store URL - アプリ公開後にここを更新してください
const APP_STORE_URL = '#'; // 例: 'https://apps.apple.com/jp/app/your-app-id'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src={`${BASE_PATH}/images/logo.png`} 
              alt="録移音機" 
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold text-gray-900">録移音機</span>
          </div>
          
          {/* デスクトップメニュー */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">About</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">特徴</a>
            <a href="#scenes" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">利用シーン</a>
            <a href="#functions" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">機能</a>
            <a href="#download" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">ダウンロード</a>
          </div>

          {/* モバイルハンバーガーボタン */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="メニュー"
          >
            {mobileMenuOpen ? (
              <i className="ri-close-line text-2xl text-gray-900"></i>
            ) : (
              <i className="ri-menu-line text-2xl text-gray-900"></i>
            )}
          </button>
        </nav>

        {/* モバイルメニュー */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            <a 
              href="#about" 
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer py-2 px-4 hover:bg-gray-50 rounded-lg"
            >
              About
            </a>
            <a 
              href="#features" 
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer py-2 px-4 hover:bg-gray-50 rounded-lg"
            >
              特徴
            </a>
            <a 
              href="#scenes" 
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer py-2 px-4 hover:bg-gray-50 rounded-lg"
            >
              利用シーン
            </a>
            <a 
              href="#functions" 
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer py-2 px-4 hover:bg-gray-50 rounded-lg"
            >
              機能
            </a>
            <a 
              href="#download" 
              onClick={closeMobileMenu}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer text-center"
            >
              ダウンロード
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              音と軌跡を<br />記録する
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              録移音機は、移動経路と音声を同時に記録し、後から再生できるモバイルアプリケーションです。散歩、旅行、フィールドワークの思い出を、音と位置情報で残しましょう。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={APP_STORE_URL} className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap inline-flex items-center gap-2">
                <i className="ri-apple-fill text-2xl w-6 h-6 flex items-center justify-center"></i>
                App Storeからダウンロード
              </a>
            </div>
          </div>
          <div className="relative w-full aspect-[3/4] md:aspect-auto">
            <Image 
              src={`${BASE_PATH}/images/hero.png`} 
              alt="録移音機アプリ画面" 
              width={600}
              height={800}
              className="w-full h-auto rounded-3xl shadow-2xl object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">録移音機について</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              録移音機（Sound Trajectory Recorder）は、あなたの移動と音声を記録し、思い出を鮮明に残すためのアプリケーションです。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">iOS対応</h3>
              <p className="text-gray-600 leading-relaxed">
                iPhoneで快適に使用できる、ネイティブアプリケーションです。
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
              <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">プライバシー保護</h3>
              <p className="text-gray-600 leading-relaxed">
                すべてのデータはローカルに保存され、他のユーザーや開発者と共有されることはありません。
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
              <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-database-2-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ローカル保存</h3>
              <p className="text-gray-600 leading-relaxed">
                インターネット接続なしでも使用でき、データは安全にデバイス内に保存されます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">特徴</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              録移音機の技術的な特徴をご紹介します
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src={`${BASE_PATH}/images/gps-feature.png`} 
                alt="GPS記録機能" 
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-xl object-cover object-top"
              />
            </div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-2xl text-white w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">詳細なGPS記録</h3>
                  <p className="text-gray-600 leading-relaxed">
                    1秒間隔で正確な位置情報を記録し、移動経路を詳細に保存します。
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-play-circle-line text-2xl text-white w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">バックグラウンド記録</h3>
                  <p className="text-gray-600 leading-relaxed">
                    アプリを閉じても記録は継続され、長時間の移動にも対応します。
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-2-line text-2xl text-white w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Mapbox統合</h3>
                  <p className="text-gray-600 leading-relaxed">
                    美しく使いやすいインタラクティブな地図で、記録を視覚的に確認できます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="scenes" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">利用シーン</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              様々な場面で録移音機をご活用いただけます
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-walk-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">散歩・ジョギング</h3>
              <p className="text-gray-600 leading-relaxed">
                運動中の音声メモと経路を記録し、振り返りに活用できます。
              </p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-search-eye-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">フィールドワーク</h3>
              <p className="text-gray-600 leading-relaxed">
                調査活動の記録を音声と位置情報で正確に残せます。
              </p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-plane-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">旅行の思い出</h3>
              <p className="text-gray-600 leading-relaxed">
                旅先での音声と移動経路を保存し、思い出を鮮明に残せます。
              </p>
            </div>
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-leaf-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">自然観察</h3>
              <p className="text-gray-600 leading-relaxed">
                野鳥観察時の音声記録と位置情報を紐付けて保存できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="functions" className="py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">主な機能</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              録移音機の充実した機能をご紹介します
            </p>
          </div>
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                    <i className="ri-record-circle-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">音と移動の同時記録</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">詳細なGPS位置情報を1秒間隔で記録</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">バックグラウンドでの継続記録に対応</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">音声と位置情報を完全同期</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative max-w-sm">
                  <Image 
                    src={`${BASE_PATH}/images/record-screen.png`} 
                    alt="音と移動の同時記録" 
                    width={400}
                    height={800}
                    className="w-full h-auto rounded-3xl shadow-2xl object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative max-w-sm">
                  <Image 
                    src={`${BASE_PATH}/images/playback-screen.png`} 
                    alt="再生機能" 
                    width={400}
                    height={800}
                    className="w-full h-auto rounded-3xl shadow-2xl object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <i className="ri-play-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">再生機能</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">記録した音声と移動軌跡を同期再生</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">音声の再生位置に応じてマップ上のマーカーがアニメーション</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">音声のシーク操作に連動した軌跡の表示</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <i className="ri-folder-line text-3xl text-white w-8 h-8 flex items-center justify-center"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">記録管理</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">複数の記録を保存・一覧表示</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">記録の削除機能</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-xl text-green-600 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span className="text-gray-600 leading-relaxed">各記録の開始・終了時刻、移動時間の表示</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative max-w-sm">
                  <Image 
                    src={`${BASE_PATH}/images/management-screen.png`} 
                    alt="記録管理機能" 
                    width={400}
                    height={800}
                    className="w-full h-auto rounded-3xl shadow-2xl object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-24 px-6 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">今すぐダウンロード</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            録移音機で、あなたの移動と音声を記録しましょう
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href={APP_STORE_URL} className="bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap inline-flex items-center gap-3 shadow-xl">
              <i className="ri-apple-fill text-3xl w-7 h-7 flex items-center justify-center"></i>
              App Storeからダウンロード
            </a>
          </div>
          <p className="text-blue-100 mt-8 text-sm">iOS 14.0以降に対応</p>
        </div>
      </section>

      <section id="policy" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">プライバシーポリシー・利用規約</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex gap-2 mb-8 bg-white rounded-full p-1 w-fit mx-auto">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`px-6 py-3 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === 'privacy'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                プライバシーポリシー
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`px-6 py-3 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === 'terms'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                利用規約
              </button>
            </div>
            <div className="bg-white rounded-xl p-8 min-h-[400px] max-h-[600px] overflow-y-auto">
              {activeTab === 'privacy' ? (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">プライバシーポリシー</h3>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>詳細は下記のリンクからご確認ください。</p>
                    <a 
                      href="https://github.com/MobilityInstrument/Recorder_LP/blob/main/docs/PRIVACY_POLICY.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      プライバシーポリシーを見る
                    </a>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">利用規約</h3>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>詳細は下記のリンクからご確認ください。</p>
                    <a 
                      href="https://github.com/MobilityInstrument/Recorder_LP/blob/main/docs/TERMS_OF_SERVICE.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      利用規約を見る
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src={`${BASE_PATH}/images/logo.png`} 
                  alt="録移音機" 
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-xl font-bold">録移音機</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                音と軌跡を記録し、思い出を鮮明に残すモバイルアプリケーション
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">リンク</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="録移音機について">About</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="録移音機の特徴">特徴</a></li>
                <li><a href="#scenes" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="利用シーン">利用シーン</a></li>
                <li><a href="#functions" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="主な機能">機能</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">法的情報</h4>
              <ul className="space-y-2">
                <li><a href="#policy" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="プライバシーポリシーを読む">プライバシーポリシー</a></li>
                <li><a href="#policy" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="利用規約を読む">利用規約</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© Human Mobility Instrument 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}